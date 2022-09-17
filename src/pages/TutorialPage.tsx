import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getProblemAsync } from "../actions/problem";
import Header from "../components/Header";
import { Problem } from "../models/Problem";

const TutorialPage = ({ match }: RouteComponentProps<TutorialPageRouteParams>) => {
    const [problem, setProblem] = useState(new Problem({}))
    useEffect(() => {
        getProblemAsync(match.params.problemId).then(problem => setProblem(problem))
    }, [match.params.problemId])
    
    return (
        <div>
            <Header />
            <div className="pa3">
                <div className="pv2">
                    <h1>{problem.title}</h1>
                    <p>{problem.tutorial}</p>
                </div>
            </div>
        </div>
    )
}
export default TutorialPage;

type TutorialPageRouteParams = { problemId: string };