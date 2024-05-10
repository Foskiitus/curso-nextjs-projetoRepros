import { useParams } from "react-router-dom";

export default function Repositorio() {
  const { repositorio } = useParams();
  return <h1>Repositorio {repositorio}</h1>;
}
