import { Problem } from '../../../models/Problem';
import Latex from 'react-latex-next'
import SampleInputCart from './SampleInputCard';

const ProblemContent = ({ problem, className = "" }: ProblemContentProps) => {
    return (
        <div className={`${className} ph5 pv3`}>
            <div className="pv2">
                <div className="tc">
                    <h2>{problem.pt_BR.title}</h2>
                    <h5><small className="gray">Limite de tempo: {problem.timeLimit}ms </small></h5>
                    <h5><small className="gray">Limite de memória: {problem.timeLimit} bytes </small></h5>
                </div>
                <hr />
                <div className="mv3">
                    <Latex strict>{atob(problem.pt_BR.statement)}</Latex>
                </div>
                <div className="mv3">
                    <h5>Entrada</h5>
                    <Latex>{atob(problem.pt_BR.input)}</Latex>
                </div>
                <div className="mv3">
                    <h5>Saída</h5>
                    <Latex>{atob(problem.pt_BR.output)}</Latex>
                </div>
            </div>
            {problem.sampleInputs.map((sampleInput, i) =>
                <SampleInputCart className="mb5" sampleInput={sampleInput} key={i} />
            )}
            {
                problem.pt_BR.notes !== '' &&
                <div className="mv3">
                    <h3> Notas </h3>
                    <Latex>{atob(problem.pt_BR.notes)}</Latex>
                </div>
            }
            <div className="mv5"/>

        </div>
    )
}
export default ProblemContent;

export type ProblemContentProps = {
    problem: Problem,
    className?: string
}