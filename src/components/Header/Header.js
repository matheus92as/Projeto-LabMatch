import React from "react";
import { MainContainer, TelaMatch, TelaInicio } from "./style";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";

const Header = (props) => {
  return (
    <MainContainer>
      <h2>LabMatch</h2>
      {props.telaInicial ? (
        <TelaMatch>
          <DoneAllRoundedIcon onClick={props.telaMatch} color="success" />
        </TelaMatch>
      ) : (
        <TelaInicio>
          <KeyboardReturnRoundedIcon onClick={props.telaInicio} />
        </TelaInicio>
      )}
    </MainContainer>
  );
};

export default Header;
