import { useRef, useState } from 'react';
import { Button, Form, FloatingLabel } from 'react-bootstrap'

const SendFile = ({ className = "" }: SendFileProps) => {

    const fileInput = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
    const [file, setFile] = useState<string>('');

    const onClickSendQuestion = () => {
        fileInput.current.click()
    }

    const onClickSelectLanguage = (e: any) => {
        console.log(e.target.value)
    }

    const onChangeFile = (e: any) => {
        setFile(e.target.value)
    }

    return (
        <div className={`${className} mv2`}>
            <h4> Send your code </h4>

            <FloatingLabel controlId="floatingSelect" label="Select the language">
                <Form.Select aria-label="Default select example" size="sm">
                    <option value="c">C</option>
                    <option value="c++">C++</option>
                    <option value="python">Python</option>
                </Form.Select>
            </FloatingLabel>

            <input type="file" ref={fileInput} className="dn" onClick={onChangeFile} />

            <Button
                variant="primary"
                className="mv2 w-100"
                onClick={onClickSendQuestion}>
                {file === '' ? "Send code" : file}
            </Button>
        </div>
    );
}
export default SendFile;

type SendFileProps = {
    className?: string
};