import { useState, useEffect } from 'react'
import { Problem as ProblemModel } from '../models/Problem'
import { getProblemAsync } from '../actions/problem';
import { Table, Spinner } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import ProblemStatement from '../components/problem/ProblemContent';
import LatexParagraph from '../components/LatexParagraph';
import SendFile from '../components/problem/ProblemSideBar';
import ProblemContent from '../components/problem/ProblemContent';
import ProblemSideBar from '../components/problem/ProblemSideBar';


const ProblemPage = ({ match }: RouteComponentProps<ProblemRouteParams>) => {
    const [problem, setProblem] = useState<ProblemModel>(new ProblemModel())
    const [isFetching, setFetching] = useState<boolean>(true)
    const { title, statement, input, output, sampleInputs, notes } = problem

    useEffect(() => {
        setFetching(false);
    }, [match.params.problemId]);

    const onSubmitQuestion = (language: string, file: File | undefined) => {
        console.log('File submitted');
        console.log(language);
        console.log(file)
    }

    return (
        <div>
            <Header />
            <div className="flex flex-row">
                <ProblemContent className="w-two-thirds" />
                <ProblemSideBar problemId={match.params.problemId} className="w-third" />
            </div>
        </div>
    );
}
export default ProblemPage;

type ProblemRouteParams = { problemId: string };