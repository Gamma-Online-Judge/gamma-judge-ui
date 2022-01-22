import { useEffect, useState } from "react";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import { getSubmissionAsync, getSubmissionCodeAsync } from "../actions/submissions";
import Header from "../components/Header";
import { Submission } from "../models/Submission";

const SubmissionPage = ({
  match,
}: RouteComponentProps<SubmissionPageRouteParams>) => {
  const { submissionId } = match.params;
  const [submission, setSubmission] = useState<Submission>(new Submission());
  const [updateTrigger, setUpdateTrigger] = useState(false);
  const [sourceCode, setSourceCode] = useState('');

  useEffect(() => {
    getSubmissionCodeAsync(submissionId).then(setSourceCode);
  }, [submissionId]);

  function isLoading() {
    switch (submission.status) {
      case "InQueue":
      case "Pending":
      case "Running":
        return true;
      default:
        return false;
    }
  }

  function triggerUpdate() {
    if (isLoading())
      setTimeout(() => setUpdateTrigger(!updateTrigger), 1000);
  }

  function updatePage() {
    getSubmissionAsync(submissionId).then(setSubmission);

    triggerUpdate();
  }

  useEffect(updatePage, [updateTrigger]);

  const { variant, title, message } = getVerdictInfo(submission.status);

  return (
    <div>
      <Header />
      <div className="flex justify-center pa3">

        <Alert variant={variant}>
          <h3>{title}</h3>
          <p>{message}</p>
          {
            isLoading() &&
            <div className="flex justify-center">
              <Spinner animation="border" />
            </div>
          }
        </Alert>

      </div>
      <div className="flex justify-center pa3">
        <Card style={{ width: '90%' }}>
          <Card.Header as="h5">Código fonte - {submissionId}</Card.Header>
          <Card.Body>
            <Card.Text> <p className="pre">{sourceCode}</p></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const getVerdictInfo = (verdict: string) => {
  switch (verdict) {
    case "Accepted":
      return {
        variant: "success",
        title: "Aceito",
        message: "Parabéns o seu código passou em todos os casos de teste",
      };
    case "WrongAnswer":
      return {
        variant: "danger",
        title: "Resposta errada",
        message: "O seu código falhou em alguns casos de teste",
      };
    case "CompilationError":
      return {
        variant: "danger",
        title: "Erro de compilação",
        message: "O seu código não compilou corretamente",
      };
    case "TimeLimitExceeded":
      return {
        variant: "warning",
        title: "Tempo excedido",
        message: "O seu código não resolveu o problema no limite de tempo",
      };
    case "MemoryLimitExceeded":
      return {
        variant: "warning",
        title: "Memória excedida",
        message: "O seu código excedeu o limite de memória",
      };
    case "RuntimeError":
      return {
        variant: "warning",
        title: "Erro de execução",
        message: "Algo anormal aconteceu durante a execução do seu código",
      };
    case "Pending":
      return {
        variant: "secondary",
        title: "Pendente",
        message: "Ainda não foi possível avaliar o seu código",
      };
    case "InQueue":
      return {
        variant: "secondary",
        title: "Em fila",
        message: "Ainda está em fila para ser avaliado",
      };
    case "Running":
      return {
        variant: "secondary",
        title: "Em execução",
        message: "O código está sendo avaliado",
      };
    default:
      return {};
  }
};

export type SubmissionPageRouteParams = {
  submissionId: string;
};
export default SubmissionPage;
