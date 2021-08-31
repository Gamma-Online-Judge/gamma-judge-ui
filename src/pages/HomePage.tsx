import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = () => {
    return (
        <div>
            <Header />
            <h2> Home </h2>
            <Link to="/problem/123">
                <button> Problem 123 </button>
            </Link>
        </div>
    )
}
export default HomePage;