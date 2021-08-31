import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import ProblemContent from '../components/Problem/ProblemContent';
import ProblemSideBar from '../components/Problem/ProblemSideBar';


const ProblemPage = ({ match }: RouteComponentProps<ProblemRouteParams>) => {
    
    const onSubmitQuestion = (language: string, file: File | undefined) => {
        console.log('File submitted');
        console.log(language);
        console.log(file)
    }

    return (
        <div>
            <Header />
            <div className="flex flex-row">
                <ProblemContent className="w-two-thirds" />
                <ProblemSideBar
                    onSubmit={onSubmitQuestion}
                    problemId={match.params.problemId}
                    className="w-third"
                />
            </div>
        </div>
    );
}
export default ProblemPage;

type ProblemRouteParams = { problemId: string };