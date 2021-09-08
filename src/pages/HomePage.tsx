import { Alert, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";

const IMG_LINK_1 = 'https://designe.com.br/wp-content/uploads/2021/03/chopper-one-piece-arco-de-wano.jpg'
const IMG_LINK_2 = 'https://i.pinimg.com/474x/c0/c7/1b/c0c71bcadc86be5ea1c9193e71e3b05a.jpg'
const IMG_LINK_3 = 'https://pa1.narvii.com/6242/639718adc80907718864e567f1cb39dffba0fecc_hq.gif'
const HomePage = () => {

    const history = useHistory();

    const goToPage = (url: string) => {
        history.push(url);
    }

    return (
        <div>
            <Header />
            <div className="pa2 flex tc flex-column justify-center items-center">

                {renderAc()}
                {renderWa()}
                {renderRte()}

            </div>
        </div>
    )
}
export default HomePage;

const renderAc = () => {
    return (
        <Alert variant="success">
            <h3> AC </h3>
            <p>
                Parabéns o seu código passou em todos os casos de teste
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-success">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

const renderWa = () => {
    return (
        <Alert variant="danger">
            <h3> WA </h3>
            <p>
                O seu código falhou em alguns casos de teste
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-danger">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

const renderTle = () => {
    return (
        <Alert variant="warning">
            <h3> TLE </h3>
            <p>
                O seu código não resolveu o problema no limite de tempo
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-warning">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}

const renderRte = () => {
    return (
        <Alert variant="secondary">
            <h3> RTE </h3>
            <p>
                Algo anormal aconteceu durante a execução do seu código
            </p>
            <hr />
            <div className="d-flex justify-content-end">
                <Button variant="outline-secondary">
                    Ver o código
                </Button>
            </div>
        </Alert>
    )
}