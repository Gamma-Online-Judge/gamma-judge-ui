import { Button, Card } from 'react-bootstrap';
import Latex from 'react-latex-next'
import ClipBoardButton from '../../ClipboadButton';

const ProblemContent = ({ statement = "", className = "" }: ProblemContentProps) => {
    return (
        <div className={`${className} pa3`}>
            <div className="pv2">
                <h1> Título do problema </h1>
                <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            {[0, 1].map((sampleInput, i) =>
                <div className="flex flex-row">
                    <Card className="mv2 mr1" style={{ width: '50%' }}>
                        <Card.Header as="div">
                            <div className="flex flex-row justify-between items-center">
                                <h6>
                                    Entrada
                                </h6>
                                <ClipBoardButton textToCopy="entrada" />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                With supporting
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className="mv2 ml1" style={{ width: '50%' }} >
                        <Card.Header as="div">
                            <div className="flex flex-row justify-between items-center">
                                <h6>
                                    Saída
                                </h6>
                                <ClipBoardButton textToCopy="saida" />
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
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
    statement?: string,
    className?: string
}