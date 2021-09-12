import { useEffect, useState } from "react";
import { Form, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllContests } from "../actions/contest";
import Header from "../components/Header";
import { Contest } from "../models/Contest";
import { formatDate } from "../util/dateHandler";

const ContestsPage = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [searchText, setSearchText] = useState();

  const handleSearch = (inp: any) => {
    console.log(inp);
    console.log(searchText);
  };

  useEffect(() => {
    getAllContests().then((response) => setContests(response));
  });

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
              <th>Título</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {contests.map((contest, i) => (
              <tr key={i}>
                <td>
                  <div className="d-grid gap-2">
                    <Link
                      className="text-inherit d-grid gap-2"
                      to={`/contest/${contest.id}`}
                    >
                      <Button className="tl" variant="outline-success">
                        {contest.name}
                      </Button>
                    </Link>
                  </div>
                </td>
                <td>{formatDate(contest.date)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default ContestsPage;
