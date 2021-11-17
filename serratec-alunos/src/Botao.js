
const Botao = (props) =>{
    const showMessage = () =>{
        alert('clicou');
    }
return(
<button
style={{
    backgroundColor:'red',
    color:'white',
    width:'250px',
    heigth:'120px',
    fontSize:'16pt',

}}
    onClick={showMessage}
>{props.children}</button>


);
};
export default Botao;