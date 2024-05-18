import { Text } from "../Texts";
import { Container } from "./styles";

type Props = {
  children: string;
  onPress: () => void;
  disabled?: boolean;
};

const Button: React.FC<Props> = (props) => {
  return (
    <Container onPress={props.onPress} disabled={props.disabled}>
      <Text weight="600" color="#Fff">
        {props.children}
      </Text>
    </Container>
  );
};

export { Button };
