import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";

export default function Cadastro() {

    const[Nome , setNome] = useState();
    const[Telefone , setTelefone] = useState();
    const[Email , setEmail] = useState();


  return (<>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Nome" variant="outlined" onChange={(e) => setNome(e.target.value)}/>
      <TextField id="filled-basic" label="Telefone" variant="filled" onChange={(e) => setTelefone(e.target.value)}/>
      <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
    </Box>
      {Nome}
      {Telefone}
      {Email}
    </>
  );
}