import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
  .Botões {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: 0px 0;
    padding: 0;
    z-index: 5;
    position: absolute;
    bottom: 20px;
    button {
      border-radius: 35px;
      padding: 5px;
      transition: 0.3s;
      border: 1px solid;
      background-color: inherit;
    }
    .like {
      border-color: #49ff00;
      padding: 10px;
      :hover {
        transform: scale(1.1);
        transition: 0.3s;
        background-color: rgba(228, 248, 220, 0.2);
      }
    }
    .deslike {
      border-color: #ff0c00;
      :hover {
        transform: scale(1.1);
        transition: 0.3s;
        background-color: rgba(253, 214, 212, 0.2);
      }
    }
  }
  @media screen and (min-device-width: 320px) and (max-device-width: 425px) {
    margin-bottom: 25%;
    height: fit-content;
  }
`;
