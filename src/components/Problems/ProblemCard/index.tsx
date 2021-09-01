import { Badge, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const ProblemCard = ({ problemId }: ProblemCardProps) => {
    const history = useHistory();

    const goToProblemPage = () => {
        history.push(`/problem/${problemId}`);
    }

    return (
        <a style={{ cursor: 'pointer' }} onClick={goToProblemPage}>
            <Card className="ma2">
                <Card.Header as="h6">Título do problema</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">Contest do problema</Card.Subtitle>
                    <div className="mv2">
                        <div className="mt-3">
                            Tags:{' '}
                            <Badge pill bg="primary">
                                DFS
                            </Badge>{' '}
                            <Badge pill bg="secondary">
                                Grafo
                            </Badge>{' '}
                            <Badge pill bg="success">
                                AD-Hoc
                            </Badge>{' '}
                            <Badge pill bg="danger">
                                DP
                            </Badge>{' '}
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </a>
    )
}
export default ProblemCard;

export type ProblemCardProps = {
    problemId: string
}