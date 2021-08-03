import Latex from 'react-latex-next'

const ProblemStatement = ({ statement }: ProblemStatementProps) => {
    return (
        <div>
            {statement.split('\n').map((line: string, key: number) => {
                if (line.startsWith('\\image')) {
                    const image_url = line.slice('\\image'.length).trim()
                    return (
                        <img key={key} src={image_url} alt="img" />
                    )
                }
                else {
                    return (
                        <p key={key}><Latex>{line}</Latex></p>
                    )
                }
            })}
        </div>
    )
}
export default ProblemStatement;

export type ProblemStatementProps = {
    statement: string
}