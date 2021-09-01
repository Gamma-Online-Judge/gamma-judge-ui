import { Card } from 'react-bootstrap';
import { Problem } from '../../../models/Problem';
import ClipBoardButton from '../../ClipboadButton';
import Latex from 'react-latex-next'
import SampleInputCart from './SampleInputCard';

const ProblemContent = ({ problem, className = "" }: ProblemContentProps) => {
    return (
        <div className={`${className} pa3`}>
            <div className="pv2">
                <h1>{problem.title}</h1>
                <Latex>{problem.statement}</Latex>
            </div>
            {problem.sampleInputs.map((sampleInput, i) =>
                <SampleInputCart sampleInput={sampleInput} key={i} />
            )}
            <div className="mv3">
                <h3> Notas </h3>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                </p>
            </div>
        </div>
    )
}
export default ProblemContent;

export type ProblemContentProps = {
    problem: Problem,
    className?: string
}