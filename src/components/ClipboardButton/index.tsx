import { useRef, useState } from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import Clipboard from '../Icons/Clipboard'

const ClipBoardButton = ({ textToCopy = "", buttonVariant = "outline-success" }: ClipBoardButtonProps) => {
    const target = useRef(null);
    const [show, setShow] = useState(false);
    return (
        <div>
            <Button
                ref={target}
                size="sm"
                variant={buttonVariant}
                onClick={() => {
                    navigator.clipboard.writeText(textToCopy);
                    setShow(true);
                    setTimeout(() => { setShow(false); }, 500);
                }}
            >
                <Clipboard />
            </Button >
            <Overlay target={target.current} show={show} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        Texto copiado
                    </Tooltip>
                )}
            </Overlay>
        </div>
    )
}
export default ClipBoardButton;

type ClipBoardButtonProps = {
    textToCopy?: string,
    buttonVariant?: string
};
