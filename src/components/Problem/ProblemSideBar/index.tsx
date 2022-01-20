import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Problem } from "../../../models/Problem";
import TagBadge from "../../TagBadge";

const ProblemSideBar = ({
  problem,
  onSubmit = () => {},
  className = "",
}: ProblemSideBarProps) => {
  const [file, setFile] = useState<File | undefined>(undefined);
  const [language, setLanguage] = useState<string>("c");

  return (
    <div className={`${className} pa3`}>
      <Form>
        <h3> Envie seu código </h3>
        <hr className="" />
        <Form.Group>
          <Form.Label>Linguagem</Form.Label>
          <Form.Select
            className="mv1 w-100"
            aria-label="Default select example"
            size="sm"
            onChange={(e: any) => setLanguage(e.target.value)}
          >
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="py2">Python2</option>
            <option value="py3">Python3</option>
          </Form.Select>
        </Form.Group>

        <Form.Group>
          <Form.Label>Código fonte</Form.Label>
          <Form.Control
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button
          className="mt-3"
          variant="primary"
          onClick={() => onSubmit(language, file)}
        >
          Enviar
        </Button>
      </Form>
      <hr className="" />
      <div>
        <h3> Ajuda </h3>
        <Link to={`/tutorial/${problem.id}`}>
          <Button className="mt-3" variant="outline-success">
            Tutorial
          </Button>
        </Link>
      </div>
      <hr className="" />
      <div>
        <h3> Tags </h3>
        <div className="mt-3">
          {problem.tags.map((tag, i) => (
            <TagBadge tag={tag} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProblemSideBar;

type ProblemSideBarProps = {
  problem: Problem;
  className?: string;
  onSubmit?: (language: string, file: File | undefined) => void;
};
