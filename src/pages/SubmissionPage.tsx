import { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import Header from "../components/Header";

const SubmissionPage = ({
  match,
}: RouteComponentProps<SubmissionPageRouteParams>) => {
  const { submissionId } = match.params;
  const [loading, setLoading] = useState(true);
  const [verdict, setVerdict] = useState("WA");

  useEffect(() => {
    switch (getRandomInt(0, 4)) {
      case 0:
        setVerdict("AC");
        break;
      case 1:
        setVerdict("WA");
        break;
      case 2:
        setVerdict("RTE");
        break;
      default:
        setVerdict("TLE");
        break;
    }
    setTimeout(() => setLoading(false), 3000);
  }, [submissionId]);

  const { variant, title, message } = getVerdictInfo(verdict);

  return (
    <div>
      <Header />
      <div className="flex justify-center pa3">
        {loading && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        )}
        {!loading && (
          <Alert variant={variant}>
            <h3>{title}</h3>
            <p>{message}</p>
            <p>Id da submissão: {submissionId} </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button variant={`outline-${variant}`}>Ver o código</Button>
            </div>
          </Alert>
        )}
      </div>
    </div>
  );
};

const getVerdictInfo = (verdict: string) => {
  switch (verdict) {
    case "AC":
      return {
        variant: "success",
        title: "AC",
        message: "Parabéns o seu código passou em todos os casos de teste",
      };
    case "WA":
      return {
        variant: "danger",
        title: "WA",
        message: "O seu código falhou em alguns casos de teste",
      };
    case "TLE":
      return {
        variant: "warning",
        title: "TLE",
        message: "O seu código não resolveu o problema no limite de tempo",
      };
    case "RTE":
      return {
        variant: "secondary",
        title: "RTE",
        message: "Algo anormal aconteceu durante a execução do seu código",
      };
    default:
      return {};
  }
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export type SubmissionPageRouteParams = {
  submissionId: string;
};
export default SubmissionPage;
