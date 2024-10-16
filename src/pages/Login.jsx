import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-100);
`;

const StyledLogin = styled.div`
  min-height: 400px;
  min-width: 500px;
  padding: 3rem;
  background-color: var(--color-grey-50);
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <StyledLogin>
        <Heading as="h4">Log in to your account</Heading>
        <LoginForm />
      </StyledLogin>
    </LoginLayout>
  );
}

export default Login;
