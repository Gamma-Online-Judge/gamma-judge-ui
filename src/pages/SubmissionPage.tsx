import { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import { RouteComponentProps } from "react-router-dom";
import Header from "../components/Header"

const SubmissionPage = ({ match }: RouteComponentProps<SubmissionPageRouteParams>) => {
    const { submissionId } = match.params
    const [loading, setLoading] = useState(true);
    const [verdict, setVerdict] = useState('WA');

    useEffect(() => {
        switch (getRandomInt(0, 3)) {
            case 0:
                setVerdict('AC')
                break;
            case 1:
                setVerdict('WA')
                break;
            default:
                setVerdict('TLE')
                break;
        }
        setTimeout(() => setLoading(false), 3000)
    })

    return (
        <div>
            <Header />
            <div className="flex justify-center pa3">
                {
                    loading &&
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                }
                {
                    !loading &&
                    <Verdict verdict={verdict} />
                }
            </div>
        </div>
    )
}

const Verdict = ({ verdict }: VerdictProps) => {
    switch (verdict) {
        case 'AC':
            return renderAc();
        case 'WA':
            return renderWa();
        case 'TLE':
            return renderTle();
        default:
            return null
    }
}
type VerdictProps = {
    verdict: string
}
const renderAc = () => {
    return (
        <Alert variant="success">
            <h3> AC </h3>
            <p>
                Parabéns o seu código passou em todos os casos de teste
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-success">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

const renderWa = () => {
    return (
        <Alert variant="danger">
            <h3> WA </h3>
            <p>
                O seu código falhou em alguns casos de teste
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-danger">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

const renderTle = () => {
    return (
        <Alert variant="warning">
            <h3> TLE </h3>
            <p>
                O seu código não resolveu o problema no tempo
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-warning">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export type SubmissionPageRouteParams = {
    submissionId: string
}
export default SubmissionPage;