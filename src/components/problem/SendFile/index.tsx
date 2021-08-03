import { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap'

const SendFile = ({ onSubmit = () => { }, className = "" }: SendFileProps) => {

    const fileInput = useRef<HTMLInputElement>() as React.MutableRefObject<HTMLInputElement>;
    const [file, setFile] = useState<File | undefined>(undefined);
    const [language, setLanguage] = useState<string>('C');


    return (
        <div className={`${className} mv2`}>
            {/* Invisible input component */}
            <input 
                className="dn" 
                type="file" ref={fileInput} 
                onChange={(e: any) => setFile(e.target.files[0])}        
            />

            <h4> Send your code </h4>

            <label> Language:</label>
            <Form.Select
                className="mv1 w-100"
                aria-label="Default select example"
                size="sm"
                onChange={(e: any) => setLanguage(e.target.value)}>
                <option value="c">C</option>
                <option value="c++">C++</option>
                <option value="python">Python</option>
            </Form.Select>

            <Button
                onClick={() => fileInput.current.click()}
                className="mv1 w-100"
                size="sm"
                variant="outline-primary"
            >
                {file === undefined ? "Select file" : file.name}
            </Button>

            <Button
                variant="primary"
                className="mv1 w-100"
                onClick={() => onSubmit(language, file)}
                size="sm"
            >
                Send Code
            </Button>
        </div>
    );
}
export default SendFile;

type SendFileProps = {
    className?: string,
    onSubmit?: (language: string, file: File | undefined) => void
};
