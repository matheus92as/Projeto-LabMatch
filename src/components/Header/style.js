import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50px;
  margin-top: 0px;
  margin-bottom: 18px;
  color: #f40000;
  .brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    font-family: "Tilt Neon", cursive;
    img {
      width: 25px;
      height: 30px;
      margin: 5px;
    }
  }
`;
export const TelaMatch = styled.div`
  display: flex;
  position: relative;
  left: 40%;
  margin-bottom: 5px;
`;
export const TelaInicio = styled.div`
  display: flex;
  position: relative;
  right: 40%;
  margin-bottom: 5px;
`;
