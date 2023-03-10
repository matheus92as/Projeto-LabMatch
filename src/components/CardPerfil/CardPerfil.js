import { MainContainer, Background } from "./style";
import Luke from "../../assets/img/LukeSkywalker.jpg";

function CardPerfil(props) {
  return (
    <>
      {props.perfil.name !== undefined ? (
        props.perfil.name === "Luke Skywalker" ? (
          <MainContainer animacao={props.animacao}>
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
          <MainContainer animacao={props.animacao}>
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
