import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { getContestAsync, getContestProblems } from "../actions/contest";
import { getProblemsFromCustomIds } from "../actions/problem";
import Header from "../components/Header";
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

  useEffect(() => {
    getContestAsync(contestId).then((contest) => setContest(contest));
  }, [contestId]);

  useEffect(() => {
    getContestProblems(
      contest.problems.map((problem) => problem.customId)
    ).then((problemsMap) => setProblemsMap(problemsMap));
  }, [contest.problems]);

  const history = useHistory();

  const goToSubmissionPage = (submissionId: string) => {
    history.push(`/submission/${submissionId}`);
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
          {contest.problems.map((contestProblem, i) => {
            const problemInfo = problemsMap.get(contestProblem.customId);
            return (
              <div>
                <p>CustomId: {contestProblem.customId}</p>
                <p>Identifier: {contestProblem.identifier}</p>
                <p>isOriginal: {contestProblem.isOriginal}</p>
                <p>name: {problemInfo?.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ContestPage;

type ContestPageRouteParams = { contestId: string };
