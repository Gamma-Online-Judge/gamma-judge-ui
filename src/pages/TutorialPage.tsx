import { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { getProblemAsync } from "../actions/problem";
import Header from "../components/Header";
import { Problem } from "../models/Problem";
import Latex from "react-latex-next";

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
                    <h1>{problem.pt_BR.title}</h1>
                    <Latex>{atob(problem.pt_BR.tutorial)}</Latex>
                </div>
            </div>
        </div>
    )
}
export default TutorialPage;

type TutorialPageRouteParams = { problemId: string };