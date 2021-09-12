import { BrowserRouter as Router, Route } from "react-router-dom";
import ContestPage from "./pages/ContestPage";
import ContestsPage from "./pages/ContestsPage";
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'
import ProblemsPage from "./pages/ProblemsPage";
import SubmissionPage from "./pages/SubmissionPage";
import TutorialPage from "./pages/TutorialPage";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/contests" component={ContestsPage} />
      <Route path="/contest/:contestId" component={ContestPage} />

      <Route path="/problems" component={ProblemsPage} />
      <Route path="/problem/:problemId" component={ProblemPage} />
      <Route path="/submission/:submissionId" component={SubmissionPage} />
      <Route path="/tutorial/:problemId" component={TutorialPage} />
    </Router>
  );
}

export default App;
