import { useForm } from "react-hook-form";
import Header from "../components/Header";
import styled from "styled-components"
import { FormControl, FormGroup, Button } from "react-bootstrap";
import { createUser } from "../actions/user";
import { ToastContainer, toast } from "react-toastify";
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

const DivSignup = styled.div`
  border-style: outset;
  width: 600px;
  height: 500px;
  background: #c6d9d0;
  margin-top: 5%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
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
  margin-bottom: 20px;
  width: 50%
`


const SignUpPage = () => {
  const {
    handleSubmit, register
  } = useForm()

  const history = useHistory();

  const onSubmit = (data: any) => {
    createUser(data).then(
      response => {
          history.push('/login')
      }
    ).catch(err => {
      alert(err)
    })
  }
  return (
    <Container>
      <Header/>
      <Content>
        <DivSignup>
            <Title>Crie sua conta</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <StyledFormGroup>
                <FormControl
                  placeholder="Username"
                  {...register("username")}
                  />
              </StyledFormGroup>
              <StyledFormGroup>
                <FormControl
                  placeholder="Nome"
                  {...register("name")}
                  />
              </StyledFormGroup>
              <StyledFormGroup>
                <FormControl
                  placeholder="Email"
                  {...register("email")}
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
                Cadastrar
              </StyledButton>
            </Form>
        </DivSignup>
      </Content>
    </Container>
  )
}

export default SignUpPage;