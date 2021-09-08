import { useEffect, useState } from 'react'
import { Form, Table } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { getAllProblems } from '../actions/problem';
import Header from "../components/Header";
import TagBadge from '../components/TagBadge';
import { Problem } from '../models/Problem';

const ProblemsPage = () => {
    const [searchText, setSearchText] = useState();
    const [problems, setProblems] = useState<Problem[]>([]);

    const handleSearch = (inp: any) => {
        console.log(inp)
        console.log(searchText)
    }

    const history = useHistory();

    const goToProblemPage = (problemId: string) => {
        history.push(`/problem/${problemId}`);
    }

    useEffect(() => {
        getAllProblems().then(problems => setProblems(problems))
    })

    return (
        <div>
            <Header />
            <div className="pa3">
                <Form onSubmit={handleSearch}>
                    <Form.Group className="mb-3" controlId="searchInput">
                        <Form.Control
                            type="search"
                            placeholder="Pesquisar"
                            onChange={(e: any) => setSearchText(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </div>
            <div className="ph3">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Título</th>
                            <th>Evento</th>
                            <th>Tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            problems.map((problem, i) =>
                                <tr key={i} onClick={() => goToProblemPage(problem.id)}>
                                    <td>{problem.customId}</td>
                                    <td>{problem.title}</td>
                                    <td>{problem.contest}</td>
                                    <td>{problem.tags.map((tag, j) =>
                                        <TagBadge tag={tag} key={j} />
                                    )}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
export default ProblemsPage;