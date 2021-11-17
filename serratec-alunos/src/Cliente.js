import Botao from './Botao';
 
function Cliente({ nome }) {
    return (
        
        <div style={{backgroundColor: "aqua"}}>      
        <h1> Dados do Cliente </h1> 
        <p> Nome: {nome} </p>

        <Botao>Cadastrar</Botao>
        <Botao>Editar</Botao>
        <Botao>Deletar</Botao>
        </div>
    );
}

export default Cliente;