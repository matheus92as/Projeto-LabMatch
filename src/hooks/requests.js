import { api } from "../lib/axios";
import { useEffect, useState } from "react";

export const EscolhePessoa = (id) => {
  const body = {
    id: id,
    choice: true,
  };

  async function chosePerson() {
    try {
      // eslint-disable-next-line
      const response = await api.post(`choose-person`, body);
    } catch (err) {
      console.log(err);
    }
  }

  return chosePerson;
};

export const PegaPerfil = (att) => {
  const [profiles, setProfiles] = useState({});
  const animation = "";

  async function catchPerfil() {
    try {
      const response = await api.get(`person`);
      setProfiles(response.data.profile);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    catchPerfil();
  }, [att]);

  return { profiles, animation };
};

export const Matchs = () => {
  const [matches, setMatches] = useState([]);

  async function catchMatch() {
    try {
      const response = await api.get(`matches`);
      setMatches(response.data.matches);
    } catch (err) {
      console.log(err);
    }
  }

  async function cleanMatchs() {
    try {
      // eslint-disable-next-line
      const response = await api.put(`clear`);
      setMatches([]);
    } catch (err) {
      console.log(err);
    }
  }

  return { matches, catchMatch, cleanMatchs };
};
