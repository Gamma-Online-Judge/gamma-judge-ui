import Latex from 'react-latex-next'

const LatexParagraph = ({ text }: LatexParagraphProps) => {
    return (
        <div>
            {text.split('\n').map((line, key) => 
                <p key={key}>
                    <Latex>{line}</Latex>
                </p>
            )}
        </div>
    )
}
export default LatexParagraph;

export type LatexParagraphProps = {
    text: string
}