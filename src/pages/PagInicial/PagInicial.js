import React, { useState } from "react";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import { MainContainer } from "./styled";
import Loading from "../../components/Loading/Loading";
import { EscolhePessoa, PegaPerfil } from "../../hooks/requests";

function PagInicial() {
  const [att, setAtt] = useState(true);
  const [choseId, setChoseId] = useState("");
  const [animacao, setAnimacao] = useState("");
  const { profiles, animation } = PegaPerfil(att);
  const chosePerson = EscolhePessoa(choseId);

  const deslike = () => {
    setAnimacao("caiEsquerda");
    setAtt(!att);
    setTimeout(() => {
      setAnimacao(animation);
    }, 1500);
  };

  const like = (id) => {
    setChoseId(id);
    chosePerson();
    setAnimacao("caiDireita");
    setAtt(!att);
    setTimeout(() => {
      setAnimacao(animation);
    }, 1500);
  };

  return (
    <MainContainer>
      <Loading />
      {profiles.name !== undefined ? (
        <CardPerfil perfil={profiles} animacao={animacao} att={att}/>
      ) : null}
      <div className="Botões">
        <button className="deslike" onClick={deslike}>
          <CloseRoundedIcon  sx={{ fontSize: 35, padding:0, color: "#ff0c00"  }} />
        </button>
        <button className="like" onClick={() => like(profiles.id)}>
          <FavoriteRoundedIcon sx={{ fontSize: 25, padding:0, color: "#49ff00"  }} />
        </button>
      </div>
    </MainContainer>
  );
}

export default PagInicial;
