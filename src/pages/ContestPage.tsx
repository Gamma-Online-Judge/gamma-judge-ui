import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link, RouteComponentProps } from "react-router-dom";
import { getContestAsync, getContestsMapByCustomId } from "../actions/contest";
import { getProblemsMapByCustomId } from "../actions/problem";
import Header from "../components/Header";
import TagBadge from "../components/TagBadge";
import { Contest } from "../models/Contest";
import { Problem } from "../models/Problem";
import { formatDate } from "../util/dateHandler";

const ContestPage = ({
  match,
}: RouteComponentProps<ContestPageRouteParams>) => {
  const { contestId } = match.params;
  const [contest, setContest] = useState(new Contest({}));
  const [problemsMap, setProblemsMap] = useState<Map<string, Problem>>(
    new Map<string, Problem>()
  );
  const [contestsMap, setContestsMap] = useState<Map<string, Contest>>(
    new Map<string, Contest>()
  );

  useEffect(() => {
    getContestAsync(contestId).then((contest) => setContest(contest));
  }, [contestId]);

  useEffect(() => {
    const customIds = contest.problems.map((problem) => problem.customId);
    getProblemsMapByCustomId(customIds).then((problemsMap) =>
      setProblemsMap(problemsMap)
    );
  }, [contest.problems]);

  useEffect(() => {
    const customIds = Array.from(problemsMap.values()).map(
      (problem) => problem.contest
    );
    getContestsMapByCustomId(customIds).then((contestsMap) =>
      setContestsMap(contestsMap)
    );
  }, [problemsMap]);

  return (
    <div>
      <Header />
      <div className="flex flex-row pa3">
        <div className="w-100">
          <div className="tc">
            <h2>{contest.name}</h2>
            <h5>
              <small className="gray">Data: {formatDate(contest.date)}</small>
            </h5>
          </div>
          <div>Problemas</div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>🎈</th>
                <th>Título</th>
                <th>Tags</th>
                <th>Evento Original</th>
              </tr>
            </thead>
            <tbody>
              {contest.problems.sort().map((contestProblem, i) => {
                const problemInfo =
                  problemsMap.get(contestProblem.customId) || new Problem();
                const contestInfo =
                  contestsMap.get(problemInfo.contest) || new Contest();
                return (
                  <tr key={i}>
                    <td>
                      <strong>{contestProblem.identifier}</strong>
                    </td>
                    <td>
                      <div className="d-grid gap-2">
                        <Link
                          className="text-inherit d-grid gap-2"
                          to={`/problem/${problemInfo.id}`}
                        >
                          <Button className="tl" variant="outline-success">
                            {problemInfo.title}
                          </Button>
                        </Link>
                      </div>
                    </td>
                    <td>
                      {problemInfo.tags.map((tag, j) => (
                        <TagBadge tag={tag} key={j} />
                      ))}
                    </td>
                    <td>
                      {problemInfo.contest === contest.customId ? (
                        <div>Problema original deste evento</div>
                      ) : (
                        <div className="d-grid gap-2">
                          <Link
                            className="text-inherit d-grid gap-2"
                            to={`/contests/${contestInfo.id}`}
                          >
                            <Button className="tl" variant="outline-secondary">
                              {contestInfo.name}
                            </Button>
                          </Link>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export default ContestPage;

type ContestPageRouteParams = { contestId: string };
