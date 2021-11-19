import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ListagemAlunos from "./pages/Aula3/pages/ListagemAlunos";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Cadastro from "./pages/Cadastro/Cadastro";
import NavBar from "./pages/Styles/NavBar";
import Exemplo from "./pages/Material/Exemplo";

const Routes= () =>{
    const routes = useRoutes([
        {path: "/", element: <ListagemAlunos />},
        {path: "/cadastro", element: <Cadastro />},
        {path: "/exemplo", element: <Exemplo />}
        
    ]);
    return routes;
}

ReactDOM.render( <React.StrictMode>
      <BrowserRouter>               
       <NavBar />
      <Routes />
    </BrowserRouter>
    
    </React.StrictMode>,
    document.getElementById("root")
);