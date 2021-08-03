import { useState, useEffect } from 'react'
import { Problem as ProblemModel } from '../models/Problem'
import { getProblemAsync } from '../actions/problem';
import { Table, Button, Dropdown } from 'react-bootstrap'
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import ProblemStatement from '../components/problem/ProblemStatement';
import LatexParagraph from '../components/LatexParagraph';
import SendFile from '../components/problem/SendFile';


const ProblemPage = ({ match }: RouteComponentProps<ProblemRouteParams>) => {
    const [problem, setProblem] = useState<ProblemModel>(new ProblemModel())
    const [isFetching, setFetching] = useState<boolean>(true)
    const { title, statement, input, output, sampleInputs, notes } = problem

    useEffect(() => {
        setFetching(false);
        getProblemAsync(match.params.problemId)
            .then(problemResponse => {
                setProblem(problemResponse);
                setFetching(false)
            })
    }, [match.params.problemId]);

    return (
        <div>
            <Header />
            {(isFetching) ? null :
                <div className="row justify-content-center">
                    <SendFile className="col-2 mh5" />
                    <div className="col-8">
                        <h1>{title}</h1>
                        <hr />
                        <ProblemStatement statement={statement} />
                        <h3>Input:</h3>
                        <LatexParagraph text={input} />
                        <h3>Output:</h3>
                        <LatexParagraph text={output} />
                        <h3>Samples:</h3>
                        <Table striped bordered hover>
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Input</th>
                                    <th scope="col">Output</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sampleInputs.map((sampleInput, key) =>
                                        <tr key={key}>
                                            <td>{sampleInput.input}</td>
                                            <td>{sampleInput.output}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        <hr />
                        <LatexParagraph text={notes} />
                    </div>
                </div>
            }

        </div>
    );
}
export default ProblemPage;

type ProblemRouteParams = { problemId: string };