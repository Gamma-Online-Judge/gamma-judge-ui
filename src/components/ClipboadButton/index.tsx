import { Button } from 'react-bootstrap';
import Clipboard from '../../components/Icons/Clipboard'

const ClipBoardButton = ({ textToCopy = "", buttonVariant = "outline-success" }: ClipBoardButtonProps) => {
    return (
        <Button
            size="sm"
            variant={buttonVariant}
            onClick={() => {
                navigator.clipboard.writeText(textToCopy)
            }}
        >
            <Clipboard />
        </Button >
    )
}
export default ClipBoardButton;

type ClipBoardButtonProps = {
    textToCopy?: string,
    buttonVariant?: string
};
