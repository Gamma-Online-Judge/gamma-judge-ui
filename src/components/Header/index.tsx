import Latex from 'react-latex-next'

const Header = () => {
    return (
        <div className="jumbotron text-center bg-dark text-white">
            <h1><Latex>{'$\\gamma$'}</Latex> Online Judge </h1>
            <p>Problemas e eventos de programação competitiva</p>
        </div>
    );
};
export default Header;