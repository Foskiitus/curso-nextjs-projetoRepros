import React, { useEffect, useState } from "react";
import { BackButton, Container, Loading, Owner } from "./styles";
import api from "../../services/api";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// decodeURIComponent(match.params.repositorio)
// match foi descontinuado e deve ser alterado para usar o useParams() do react-router-dom

export default function Repositorio() {
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(params.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);
      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [params.repositorioio]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando</h1>
      </Loading>
    );
  }
  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={35} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>
    </Container>
  );
}
