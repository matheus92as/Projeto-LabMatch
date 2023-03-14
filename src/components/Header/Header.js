import React from "react";
import { MainContainer, TelaMatch, TelaInicio } from "./style";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";
import Logo from "../../assets/img/fire.png";

const Header = (props) => {
  return (
    <MainContainer>
      <div className="brand">
        <img src={Logo} alt="chama vermelha" />
        <h2>LabMatch</h2>
      </div>
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
