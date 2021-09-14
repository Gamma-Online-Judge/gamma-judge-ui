import { useEffect, useState } from "react";
import { Button, Pagination, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getContestsMapByCustomId } from "../actions/contest";
import { getAllProblems } from "../actions/problem";
import Header from "../components/Header";
import TagBadge from "../components/TagBadge";
import { Contest } from "../models/Contest";
import { Problem } from "../models/Problem";

const ProblemsPage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [contestsMap, setContestsMap] = useState<Map<string, Contest>>(
    new Map<string, Contest>()
  );
  const [page, setPage] = useState(0);
  const problemsNumber = 10;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllProblems(problemsNumber, problemsNumber * page).then((problems) => {
      setProblems(problems);
      setLoading(false);
    });
  }, [page]);

  useEffect(() => {
    const customIds = problems.map((problem) => problem.contest);
    getContestsMapByCustomId(customIds).then((contestsMap) =>
      setContestsMap(contestsMap)
    );
  }, [problems]);

  return (
    <div>
      <Header />
      {/* <div className="pa3">
        <Form>
          <Form.Group className="mb-3" controlId="searchInput">
            <Form.Control type="search" placeholder="Pesquisar" />
          </Form.Group>
        </Form>
      </div> */}
      <div className="flex flex-column pa3 items-center">
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Carregando...</span>
          </Spinner>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Título</th>
                <th>Tags</th>
                <th>Evento</th>
              </tr>
            </thead>
            <tbody>
              {problems.map((problem, i) => {
                const contestInfo =
                  contestsMap.get(problem.contest) || new Contest();
                return (
                  <tr key={i}>
                    <td>{problem.customId}</td>
                    <td>
                      <Link
                        className="text-inherit d-grid gap-2"
                        to={`/problem/${problem.id}`}
                      >
                        <Button className="tl" variant="outline-success">
                          {problem.title}
                        </Button>
                      </Link>
                    </td>
                    <td>
                      {problem.tags.map((tag, j) => (
                        <TagBadge tag={tag} key={j} />
                      ))}
                    </td>
                    <td>
                      <div className="d-grid gap-2">
                        <Link
                          className="text-inherit d-grid gap-2"
                          to={`/contest/${contestInfo.id}`}
                        >
                          <Button className="tl" variant="outline-secondary">
                            {contestInfo.name}
                          </Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        )}
        <Pagination>
          <Pagination.First disabled={page === 0} onClick={() => setPage(0)} />
          <Pagination.Prev
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
          />
          <Pagination.Item active>{page + 1}</Pagination.Item>
          <Pagination.Next
            disabled={problems.length < problemsNumber}
            onClick={() => setPage(page + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
};
export default ProblemsPage;
