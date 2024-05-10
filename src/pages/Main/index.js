import { Container, Form, SubmitButton } from "./styles";
import { FaGithub, FaPlus } from "react-icons/fa";

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositorios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositorios" />

        <SubmitButton>
          <FaPlus size={14} color="#FFFFFF" />
        </SubmitButton>
      </Form>
    </Container>
  );
}
