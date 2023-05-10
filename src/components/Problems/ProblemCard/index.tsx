import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Problem } from "../../../models/Problem";
import TagBadge from "../../TagBadge";

const ProblemCard = ({ problem }: ProblemCardProps) => {
  return (
    <Link to={`/problem/${problem.id}`}>
      <a style={{ cursor: "pointer" }}>
        <Card className="ma2">
          <Card.Header as="h6">{problem.pt_BR.title}</Card.Header>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              {problem.contestId}
            </Card.Subtitle>
            <div className="mv2">
              <div className="mt-3">
                Tags:{" "}
                {problem.tags.map((tag, i) => (
                  <TagBadge tag={tag} key={i} />
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </a>
    </Link>
  );
};
export default ProblemCard;

export type ProblemCardProps = {
  problem: Problem;
};
