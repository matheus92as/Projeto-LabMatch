import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  text-align: start;
  color: black;
  width: 95%;
  height: 90%;
  button {
    margin-left: 15px;
    margin-top: 10px;
    font-weight: bold;
    font-family: "Tilt Neon", cursive;
  }
`;
export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 90%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #bcbcbc;
    border-radius: 15px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 15px;
  }
  .match {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    text-align: center;
    font-weight: bold;
    width: 90%;
    margin-left: 5%;
    transition: 0.2s;
    :hover {
      transition: 0.2s;
      background-color: #eeeeee;
      transform: scale(1.05);
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 30px;
      margin: 10px;
      margin-left: 0;
    }
  }
`;
