const Button = (props) =>{
return(
<botao
style={{
    backgroundColor:'red',
    color:'white',
    width:'200px',
    heigth:'200px',

}}>{props.children}</botao>


);
};
export default Button;