import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getContestsMapByCustomId } from "../actions/contest";
import { getAllProblems } from "../actions/problem";
import Header from "../components/Header";
import TagBadge from "../components/TagBadge";
import { Contest } from "../models/Contest";
import { Problem } from "../models/Problem";

const ProblemsPage = () => {
  const [searchText, setSearchText] = useState();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [contestsMap, setContestsMap] = useState<Map<string, Contest>>(
    new Map<string, Contest>()
  );

  useEffect(() => {
    getAllProblems().then((problems) => setProblems(problems));
  });

  useEffect(() => {
    const customIds = problems.map((problem) => problem.contest);
    getContestsMapByCustomId(customIds).then((contestsMap) =>
      setContestsMap(contestsMap)
    );
  }, [problems]);

  const handleSearch = (inp: any) => {
    console.log(inp);
    console.log(searchText);
  };

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
      </div>
    </div>
  );
};
export default ProblemsPage;
