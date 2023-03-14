import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 530px;
  width: 97%;
  margin-bottom: 10px;
  box-shadow: 2px 5px 5px #bcbcbc;
  border-radius: 10px;
  overflow: hidden;
  transition: 0.5s;
  animation: ${(props) => props.animacao} 0.5s both;
  font-family: "Tilt Neon", cursive;
  @keyframes caiEsquerda {
    from {
      opacity: 1;
      transform: translate(0) rotate(0);
    }
    to {
      opacity: 0;
      transform: translate(-200px) rotate(-20deg);
    }
  }
  @keyframes caiDireita {
    from {
      opacity: 1;
      transform: translate(0) rotate(0);
    }
    to {
      opacity: 0;
      transform: translate(200px) rotate(20deg);
    }
  }
  img {
    height: ${(props) => (props.height === true ? "100%" : "auto")};
    width: ${(props) => (props.width === true ? "100%" : "auto")};
    z-index: 1;
  }
  .dadosPerfil {
    height: 30%;
    width: 100%;
    position: absolute;
    bottom: 0px;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.85), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: start;
    padding: 15px;
    z-index: 2;
    p {
      margin: 5px 20px;
      margin-bottom: 55px;
    }
  }
  .NomeIdade {
    display: flex;
    flex-direction: row;
    text-align: start;
    align-items: baseline;
    margin: 0px 20px;
    h2 {
      margin-bottom: 0;
      font-size: 21px;
    }
    p {
      margin-left: 10px;
      margin-bottom: 0;
    }
  }
`;
export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  box-sizing: border-box;
  background: url(${(props) => props.src});
  filter: blur(30px);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
`;
