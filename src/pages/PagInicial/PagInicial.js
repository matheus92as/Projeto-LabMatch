import React, { useState } from "react";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
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
    }, 1200);
  };

  const like = (id) => {
    setChoseId(id);
    chosePerson();
    setAnimacao("caiDireita");
    setAtt(!att);
    setTimeout(() => {
      setAnimacao(animation);
    }, 1200);
  };

  return (
    <MainContainer>
      <Loading />
      {profiles.name !== undefined ? (
        <CardPerfil perfil={profiles} animacao={animacao} />
      ) : null}
      <div className="Botões">
        <button className="deslike" onClick={deslike}>
          <ThumbDownAltRoundedIcon color="error" size="large" />
        </button>
        <button className="like" onClick={() => like(profiles.id)}>
          <ThumbUpRoundedIcon color="success" size="large" />
        </button>
      </div>
    </MainContainer>
  );
}

export default PagInicial;
