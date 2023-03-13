import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import GroupRemoveRoundedIcon from "@mui/icons-material/GroupRemoveRounded";
import { MainContainer, Lista } from "./styled";
import Luke from "../../assets/img/LukeSkywalker.jpg";
import { Matchs } from "../../hooks/requests";

function Matches() {
  const { matches, catchMatch, cleanMatchs } = Matchs();

  const listaMatches = matches.map((perfil) => {
    return (
      <div className="match" back={perfil.photo} key={perfil.name}>
        {perfil.name === "Luke Skywalker" ? (
          <img src={Luke} alt="foto de perfil"></img>
        ) : (
          <img src={perfil.photo} alt="foto de perfil"></img>
        )}
        <p>{perfil.name}</p>
      </div>
    );
  });

  useEffect(() => {
    catchMatch();
  }, []);

  return (
    <MainContainer>
      <Lista>{listaMatches}</Lista>
      <Button
      sx={{ fontSize: 15, color: "#ff0c00"  }}
        onClick={() => cleanMatchs()}
        size="small"
        // variant="outlined"
        startIcon={<GroupRemoveRoundedIcon />}
      >
        Limpar Matches
      </Button>
    </MainContainer>
  );
}

export default Matches;
