import Latex from 'react-latex-next'

const ProblemContent = ({ statement = "", className = "" }: ProblemContentProps) => {
    return (
        <div className={className}>
            <h1> Problem title </h1>
        </div>
    )
}
export default ProblemContent;

export type ProblemContentProps = {
    statement?: string,
    className?: string
}