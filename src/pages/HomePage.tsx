import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const IMG_LINK_1 =
  "https://designe.com.br/wp-content/uploads/2021/03/chopper-one-piece-arco-de-wano.jpg";
const IMG_LINK_2 =
  "https://i.pinimg.com/474x/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg";
const IMG_LINK_3 =
  "https://pa1.narvii.com/6242/639718adc80907718864e567f1cb39dffba0fecc_hq.gif";
const HomePage = () => {

  return (
    <div>
      <Header />
      <div className="pa2 flex tc flex-column justify-center items-center">
        <h1> Gamma Online Judge </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>

      <div className="pa2 flex tc flex-wrap justify-center items-center">
        <Card style={{ width: "18rem" }} className="ma2 tc">
          <Card.Img variant="top" src={IMG_LINK_1} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/contests">
              <Button variant="primary">Eventos</Button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }} className="ma2 tc">
          <Card.Img variant="top" src={IMG_LINK_3} />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/problems">
              <Button variant="primary">Problemas</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default HomePage;
