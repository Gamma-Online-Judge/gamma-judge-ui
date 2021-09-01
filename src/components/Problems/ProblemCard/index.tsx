import { Badge, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Problem } from "../../../models/Problem";
import TagBadge from "../../TagBadge";

const ProblemCard = ({ problem }: ProblemCardProps) => {
    const history = useHistory();

    const goToProblemPage = () => {
        history.push(`/problem/${problem.id}`);
    }

    return (
        <a style={{ cursor: 'pointer' }} onClick={goToProblemPage}>
            <Card className="ma2">
                <Card.Header as="h6">{problem.title}</Card.Header>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{problem.contest}</Card.Subtitle>
                    <div className="mv2">
                        <div className="mt-3">
                            Tags:{' '}
                            {
                                problem.tags.map((tag, i) => <TagBadge tag={tag} key={i} />)
                            }
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </a>
    )
}
export default ProblemCard;

export type ProblemCardProps = {
    problem: Problem
}