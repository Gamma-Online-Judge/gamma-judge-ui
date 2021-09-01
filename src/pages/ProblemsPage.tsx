import { useEffect, useState } from 'react'
import { Form } from "react-bootstrap";
import { getAllProblems } from '../actions/problem';
import Header from "../components/Header";
import ProblemCard from '../components/Problems/ProblemCard';

const ProblemsPage = () => {
    const [searchText, setSearchText] = useState();
    const [problems, setProblems] = useState([]);
    const handleSearch = (inp: any) => {
        console.log(inp)
        console.log(searchText)
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
            <div className="flex flex-wrap">
                {
                    problems.map((problem, i) =>
                        <ProblemCard problem={problem} key={i} />
                    )
                }
            </div>
        </div>
    )
}
export default ProblemsPage;