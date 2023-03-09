import React, { useState, useEffect } from "react";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import CardPerfil from "../../components/CardPerfil/CardPerfil";
import { MainContainer } from "./styled";
import Loading from "../../components/Loading.js/Loading";
import { api } from "../../lib/axios";

function PagInicial() {
  const [mudaTela, setMudaTela] = useState(true);
  const [perfil, setPerfil] = useState({});
  const [animacao, setAnimacao] = useState("");

  async function escolhePessoa(id) {
    const body = {
      id: id,
      choice: true,
    };
    try {
      // eslint-disable-next-line
      const response = await api.post(`choose-person`, body);
    } catch (err) {
      console.log(err);
    }
  }

  async function pegaPerfil() {
    try {
      const response = await api.get(`person`);
      setAnimacao("");
      setPerfil(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  }

  const deslike = () => {
    setAnimacao("caiEsquerda");
    setMudaTela(!mudaTela);
    setTimeout(() => {
      pegaPerfil();
    }, 1200);
  };

  const like = (id) => {
    setAnimacao("caiDireita");
    setMudaTela(!mudaTela);
    escolhePessoa(id);
    setTimeout(() => {
      pegaPerfil();
    }, 1200);
  };

  useEffect(() => {
    pegaPerfil();
  }, []);

  return (
    <MainContainer>
      <Loading />
      {perfil ? <CardPerfil perfil={perfil} animacao={animacao} /> : null}
      <div className="Botões">
        <button className="deslike" onClick={deslike}>
          <ThumbDownAltRoundedIcon color="error" size="large" />
        </button>
        <button className="like" onClick={() => like(perfil.id)}>
          <ThumbUpRoundedIcon color="success" size="large" />
        </button>
      </div>
    </MainContainer>
  );
}

export default PagInicial;
