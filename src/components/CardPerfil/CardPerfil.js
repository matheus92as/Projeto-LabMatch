import { MainContainer, Background } from "./style";
import Luke from "../../assets/img/LukeSkywalker.jpg";
import { useState } from "react";

function CardPerfil(props) {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [heightBigger, setHeightBigger] = useState(false);
  const [widthBigger, setWidthBigger] = useState(false);

  let img = new Image();
  img.src = props.perfil.photo;

  img.onload = function imgSize() {
    let realHeight = this.height;
    let realWidth = this.width;
    setWidth(realWidth);
    setHeight(realHeight);
    if (height >= width) {
      setHeightBigger(true);
      setWidthBigger(false);
    } else if (width > height) {
      setHeightBigger(false);
      setWidthBigger(true);
    }
  };

  return (
    <>
      {props.perfil.name !== undefined ? (
        props.perfil.name === "Luke Skywalker" ? (
          <MainContainer animacao={props.animacao} height={true} width={false}>
            <Background src={props.perfil.photo} />
            <img src={Luke} alt="Foto de Perfil"></img>
            <div className="dadosPerfil">
              <div className="NomeIdade">
                <h2>{props.perfil.name}, </h2>
                <p>{props.perfil.age} anos</p>
              </div>
              <p>{props.perfil.bio}</p>
            </div>
          </MainContainer>
        ) : (
          <MainContainer
            animacao={props.animacao}
            height={heightBigger}
            width={widthBigger}
          >
            <Background src={props.perfil.photo} />
            <img src={props.perfil.photo} alt="Foto de Perfil"></img>
            <div className="dadosPerfil">
              <div className="NomeIdade">
                <h2>{props.perfil.name}, </h2>
                <p>{props.perfil.age} anos</p>
              </div>
              <p>{props.perfil.bio}</p>
            </div>
          </MainContainer>
        )
      ) : null}
    </>
  );
}

export default CardPerfil;
