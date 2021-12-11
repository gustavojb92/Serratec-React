import axios from "axios";
import { useEffect } from "react";
import Styles from "../../components/Styles";
import { API_URL } from "../../constants";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useParams } from "react-router";
import {TemaProvider, AlunoProvider} from "../../context";
import AlunoContext from "../../context/alunos";
import {useState, useContext} from"react";

const CadastrarAlunos = () => {
  const { id } = useParams();
  const MySwal = withReactContent(Swal);
  const { setAlunos, aluno } = useContext(AlunoContext);
  const valorInicial = id ? "" : null;
  const [nome, setNome] = useState(valorInicial);
  const [idade, setIdade] = useState(valorInicial);
  const [cidade, setCidade] = useState(valorInicial);

  useEffect(()=> {
    getAlunos()
  }, []);

  const getAlunos = () => {
    aluno.forEach((aluno) => {
        if (aluno.id == id) {
          setNome(aluno.nome);
          setIdade(aluno.idade);
          setCidade(aluno.cidade);
        }})
      }

  const cadastrarAlunos = () => {
    if (id) {
      axios.put(API_URL, {
        id,
        nome,
        idade,
        cidade
      }).then((response) => {
        console.log(response);
        if (response.status === 200) {
          MySwal.fire(<p>{response?.data?.message}</p>);
          limparCampos();
        }
      }).catch(error => {
        MySwal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      });
    } else {
      axios
        .post(API_URL, {
          nome,
          idade,
          cidade,
        })
        .then((response) => {
          if (response.status === 201) {
            MySwal.fire(<p>{response?.data?.message}</p>);
            limparCampos();
          }
        }).catch(error => {
          MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error,
          })
        });
    }
  };

  const limparCampos = () => {
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <Styles.Form>
      <Styles.InputCadastro
        label="Nome"
        variant="outlined"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Styles.InputCadastro
        label="Idade"
        variant="outlined"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <Styles.InputCadastro
        label="Cidade"
        variant="outlined"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <Styles.ButtonCadastro variant="contained" onClick={cadastrarAlunos}>
        {id ? 'Editar' : 'Cadastrar'}
      </Styles.ButtonCadastro>
    </Styles.Form>
  );
};

export default CadastrarAlunos;
