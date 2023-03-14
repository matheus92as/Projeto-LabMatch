import React, { useState } from "react";
import PagInicial from "./pages/PagInicial/PagInicial";
import Matches from "./pages/Matches/Matches";
import { AppMain, MainContainer } from "./styled";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";

function App() {
  const [telaInicial, setTelaInicial] = useState(true);

  const telaMatch = () => {
    setTelaInicial(false);
  };
  const telaInicio = () => {
    setTelaInicial(true);
  };

  return (
    <AppMain>
      <MainContainer>
        <Header
          telaMatch={telaMatch}
          telaInicio={telaInicio}
          telaInicial={telaInicial}
          setTelaInicial={setTelaInicial}
        />
        <Loading />
        {telaInicial ? <PagInicial /> : <Matches />}
      </MainContainer>
    </AppMain>
  );
}

export default App;
