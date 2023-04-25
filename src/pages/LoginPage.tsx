import { useContext, useState } from "react";
import { Button, Card, Form } from "react-bootstrap"
import { postLogin } from "../actions/login";
import Header from "../components/Header"
import { AuthContext } from "../contexts/AuthContext";
import { useForm } from "react-hook-form";


const LoginPage = () => {
  const {
    handleSubmit,
  } = useForm();
  const auth = useContext(AuthContext)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (data: any) => {
    const {username, password} = data;
    auth.authenticate(username, password);
  }

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center" style={{ position: 'relative', minHeight: '80vh' }}>
        <Card className="col-md-5 mx-auto">
          <Card.Header>Login</Card.Header>
          <Form style={{ margin: '1rem' }} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Nome de usuário</Form.Label>
              <Form.Control
                placeholder="Usuário"
                value={username}
                onChange={(e: any) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: '1rem' }}
              onClick={onSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
