import { useState } from 'react'
import { Form, Pagination } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import Header from "../components/Header";
import ProblemCard from '../components/Problems/ProblemCard';

const ProblemsPage = () => {
    const [searchText, setSearchText] = useState();
    const handleSearch = (inp: any) => {
        console.log(inp)
        console.log(searchText)
    }

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
                    ['1', '2', '1', '2', '1', '2', '1', '2', '1', '2'].map((problemId, i) =>
                        <ProblemCard problemId={problemId} key={i} />
                    )
                }
            </div>
        </div>
    )
}
export default ProblemsPage;