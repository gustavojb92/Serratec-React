import Botao from './components/botao/Botao';
 
const divStyle = {
    backgroundColor: "aqua",
    border: "3px solid red",
    margin: "15px"
}

function Cliente({ nome }) {
    return (
        
        <div style={divStyle}>      
        <h1> Dados do Cliente </h1> 
        <p> Nome: {nome} </p>

        <Botao>Cadastrar</Botao>
        <Botao>Editar</Botao>
        <Botao>Deletar</Botao>
        </div>
    );
}

export default Cliente;