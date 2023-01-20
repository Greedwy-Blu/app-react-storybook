import { Container } from "./styles";

export type ButtonProps = {
  children: string,
  variant: 'primary' | 'secondary' | 'outline';
}

function Button({children,variant}: ButtonProps) {
  return(
   <Container>{children}</Container>
  )
}

export default Button;
