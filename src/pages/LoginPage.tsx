import { useContext } from "react"; 
import { Button, FormControl, FormGroup } from "react-bootstrap"
import Header from "../components/Header"
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`

const DivLogin = styled.div`
  border-style: outset;
  width: 600px;
  height: 300px;
  background: #c6d9d0;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-top: 20px;
`;

const StyledFormGroup = styled(FormGroup)`
  width: 90%;
`

const Title = styled.h1`
  color: black;
`

const StyledButton = styled(Button)`
  margin-bottom: 15px;
  width: 50%
`


const LoginPage = () => {
  const {
    handleSubmit,
    register,
  } = useForm();
  const auth = useContext(AuthContext)
  const history = useHistory()

  const onSubmit = (data: any) => {
    const {username, password} = data;
    auth.authenticate(username, password);
    goToHomePage();
  }

  const goToHomePage = () => {
    history.push('/');
  };

  return (
    <Container>
      <Header/>
      <Content>
        <DivLogin>
          <Title>Entrar</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StyledFormGroup>
              <FormControl
                placeholder="Usuário"
                {...register('username')}
              />
            </StyledFormGroup>
            <StyledFormGroup>
              <FormControl
                placeholder="Senha"
                type="password"
                {...register("password")}
                />
            </StyledFormGroup>
            <StyledButton
              variant="primary"
              type="submit"
            >
              Login
            </StyledButton>
          </Form>
        </DivLogin>
      </Content>
    </Container>
  )
}

export default LoginPage
