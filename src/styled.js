import styled from "styled-components";

export const AppMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #212121;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 3px solid black;
  background-color: whitesmoke;
  overflow: hidden;
  border-radius: 15px;
  height: 600px;
  width: 400px;
  padding: 20px 0;
  position: relative;
  @media screen and (min-device-width: 320px) and (max-device-width: 425px) {
    height: 100%;
    width: 100%;
  }
`;
