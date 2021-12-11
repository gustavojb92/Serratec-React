import { TemaProvider } from "./tema";
import { AlunoProvider } from "./alunos";

const GlobalContext = ({ children }) => {
  return <TemaProvider>
    <AlunoProvider>
    {children}
   </AlunoProvider>
    </TemaProvider>;
};

export default GlobalContext;