import { useState } from "react";
import { Form } from "react-bootstrap";
import Header from "../components/Header";

const ContestsPage = () => {
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
            <div>
            </div>
        </div>
    )
}
export default ContestsPage;