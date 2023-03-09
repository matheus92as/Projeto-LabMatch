import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import GroupRemoveRoundedIcon from "@mui/icons-material/GroupRemoveRounded";
import { MainContainer, Lista } from "./styled";
import { api } from "../../lib/axios";
import Luke from "../../assets/img/LukeSkywalker.jpg";

function Matches() {
  const [matches, setMatches] = useState([]);

  async function pegaMatch() {
    try {
      const response = await api.get(`matches`);
      setMatches(response.data.matches);
    } catch (err) {
      console.log(err);
    }
  }

  async function limpaMatchs() {
    try {
      // eslint-disable-next-line
      const response = await api.put(`clear`);
      setMatches([]);
    } catch (err) {
      console.log(err);
    }
  }

  const listaMatches = matches.map((perfil) => {
    return (
      <div className="match" back={perfil.photo} key={perfil.name}>
        {perfil.photo === "Luke Skywalker" ? (
          <img src={Luke} alt="foto de perfil"></img>
        ) : (
          <img src={perfil.photo} alt="foto de perfil"></img>
        )}
        <p>{perfil.name}</p>
      </div>
    );
  });

  useEffect(() => {
    pegaMatch();
  }, []);

  return (
    <MainContainer>
      <Lista>{listaMatches}</Lista>
      <Button
        onClick={limpaMatchs}
        size="small"
        variant="outlined"
        startIcon={<GroupRemoveRoundedIcon />}
      >
        Limpar Matches
      </Button>
    </MainContainer>
  );
}

export default Matches;
