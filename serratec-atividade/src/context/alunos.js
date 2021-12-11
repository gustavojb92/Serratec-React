import { createContext, useState } from "react";

const estadoInicial = {
  alunos: [],
  setAluno: () => {},
};
const AlunoContext = createContext(estadoInicial);
console.log(AlunoContext)

const AlunoProvider = ({ children }) => {
  const [aluno, setAlunos] = useState(
    estadoInicial.alunos
    );


  return (
    <AlunoContext.Provider
      value={{
        aluno, setAlunos,
      }}
    >
      {children}
    </AlunoContext.Provider>
  );
};

export { AlunoProvider };
export default AlunoContext;