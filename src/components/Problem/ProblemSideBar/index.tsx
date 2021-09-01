import { useState } from 'react';
import { Badge, Button, Form } from 'react-bootstrap'
import { useHistory } from "react-router-dom";
import { Problem } from '../../../models/Problem';
import TagBadge from '../../TagBadge';


const ProblemSideBar = ({ problem, onSubmit = () => { }, className = "" }: ProblemSideBarProps) => {

    const [file, setFile] = useState<File | undefined>(undefined);
    const [language, setLanguage] = useState<string>('C');
    const history = useHistory();

    const goToTutorialPage = () => {
        history.push(`/tutorial/${problem.id}`);
    }
    return (
        <div className={`${className} pa3`}>
            <Form onSubmit={() => onSubmit(language, file)}>
                <h3> Envie seu código </h3>
                <hr className="" />
                <Form.Group>
                    <Form.Label>Linguagem</Form.Label>
                    <Form.Select
                        className="mv1 w-100"
                        aria-label="Default select example"
                        size="sm"
                        onChange={(e: any) => setLanguage(e.target.value)}>
                        <option value="c">C</option>
                        <option value="c++">C++</option>
                        <option value="python">Python</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Código fonte</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={(e: any) => setFile(e.target.files[0])}
                    />
                </Form.Group>

                <Button className="mt-3" variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
            <hr className="" />
            <div>
                <h3> Ajuda </h3>
                <Button
                    className="mt-3"
                    variant="outline-success"
                    onClick={goToTutorialPage}
                >
                    Tutorial
                </Button>
            </div>
            <hr className="" />
            <div>
                <h3> Tags </h3>
                <div className="mt-3">
                    {
                        problem.tags.map((tag, i) => <TagBadge tag={tag} key={i} />)
                    }
                </div>
            </div>

        </div>
    );
}
export default ProblemSideBar;

type ProblemSideBarProps = {
    problem: Problem,
    className?: string,
    onSubmit?: (language: string, file: File | undefined) => void
};
