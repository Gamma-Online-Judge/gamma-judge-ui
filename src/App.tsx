import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './pages/HomePage'
import ProblemPage from './pages/ProblemPage'

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route path="/problem/:problemId" component={ProblemPage} />
    </Router>
  );
}

export default App;
