import { Text } from "../Texts";
import { Container } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Text opacity={0.9}>Bem vindo ao</Text>
      <Text size={24} weight="700">
        QUICK<Text size={24}>Serve</Text>
      </Text>
    </Container>
  );
};

export { Header };
