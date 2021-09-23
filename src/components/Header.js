import { StyledHeader } from "./styles/Header.styled";
import { Nav } from "./styles/Header.styled";
import { Logo } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try ti for free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
