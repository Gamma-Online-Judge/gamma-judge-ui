import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { getContestAsync } from "../actions/contest";
import Header from "../components/Header";
import { Contest } from "../models/Contest";

const ContestPage = ({
  match,
}: RouteComponentProps<ContestPageRouteParams>) => {
  const { contestId } = match.params;
  const [contest, setContest] = useState(new Contest({}));
  useEffect(() => {
    getContestAsync(contestId).then((contest) => setContest(contest));
  }, [contestId]);

  const history = useHistory();

  const goToSubmissionPage = (submissionId: string) => {
    history.push(`/submission/${submissionId}`);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-row">batata</div>
    </div>
  );
};
export default ContestPage;

type ContestPageRouteParams = { contestId: string };
