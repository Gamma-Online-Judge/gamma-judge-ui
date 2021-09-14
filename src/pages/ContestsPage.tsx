import { useEffect, useState } from "react";
import { Form, Table, Button, Spinner, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllContests } from "../actions/contest";
import Header from "../components/Header";
import { Contest } from "../models/Contest";
import { formatDate } from "../util/dateHandler";

const ContestsPage = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [page, setPage] = useState(0);
  const [contestNumber, setContestsNumber] = useState(10);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllContests(contestNumber, contestNumber * page).then((response) => {
      setContests(response);
      setLoading(false);
    });
  }, [page]);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="pa3"></div>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="pa3">
        <Form>
          <Form.Group className="mb-3" controlId="searchInput">
            <Form.Control type="search" placeholder="Pesquisar" />
          </Form.Group>
        </Form>
      </div>
      <div className="flex flex-column ph3 items-center">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        ) : (
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
        )}
        <Pagination>
          <Pagination.First disabled={page == 0} onClick={() => setPage(0)} />
          <Pagination.Prev
            disabled={page == 0}
            onClick={() => setPage(page - 1)}
          />
          <Pagination.Item active>{page + 1}</Pagination.Item>
          <Pagination.Next
            disabled={contests.length < contestNumber}
            onClick={() => setPage(page + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
};
export default ContestsPage;
