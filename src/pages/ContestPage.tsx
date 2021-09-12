import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { getContestAsync, getContestsByCustomIds } from "../actions/contest";
import { getProblemsByCustomIds } from "../actions/problem";
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

  const history = useHistory();

  const goToProblemPage = (problemId: string) => {
    history.push(`/problem/${problemId}`);
  };

  const goToContestPage = (contestId: string) => {
    history.push(`/contest/${contestId}`);
  };

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
                  <tr key={i} onClick={() => console.log(problemInfo.id)}>
                    <td>
                      <strong>{contestProblem.identifier}</strong>
                    </td>
                    <td>
                      <div className="d-grid gap-2">
                        <Button
                          variant="outline-success"
                          onClick={() => goToProblemPage(problemInfo.id)}
                        >
                          {problemInfo.title}
                        </Button>
                      </div>
                    </td>
                    <td>
                      {problemInfo.tags.map((tag, j) => (
                        <TagBadge tag={tag} key={j} />
                      ))}
                    </td>
                    <td>
                      {problemInfo.contest == contest.customId ? (
                        <div className="tc">
                          <strong>Problema original deste evento</strong>
                        </div>
                      ) : (
                        <div className="d-grid gap-2">
                          <Button
                            variant="outline-secondary"
                            onClick={() => goToContestPage(contestInfo.id)}
                          >
                            {contestInfo.name}
                          </Button>
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

const getProblemsMapByCustomId = async (customIds: string[]) => {
  const problems = await getProblemsByCustomIds(customIds);
  const result = new Map<string, Problem>();
  problems.map((problem) => result.set(problem.customId, problem));
  return result;
};

const getContestsMapByCustomId = async (customIds: string[]) => {
  const contests = await getContestsByCustomIds(customIds);
  const result = new Map<string, Contest>();
  contests.map((contest) => result.set(contest.customId, contest));
  return result;
};
