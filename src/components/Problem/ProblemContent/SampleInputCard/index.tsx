import { Card } from "react-bootstrap";
import { SampleInput } from "../../../../models/Problem";
import ClipBoardButton from "../../../ClipboardButton";

const SampleInputCart = ({
  sampleInput,
  className = "",
}: SampleInputCardProps) => {
  return (
    <div className={className}>
      <div className="flex flex-row">
        <Card className="mv2 mr1" style={{ width: "50%" }}>
          <Card.Header as="div">
            <div className="flex flex-row justify-between items-center">
              <h6>Entrada</h6>
              <ClipBoardButton textToCopy={sampleInput.input} />
            </div>
          </Card.Header>
          <Card.Body>
            <pre>{sampleInput.input}</pre>
          </Card.Body>
        </Card>

        <Card className="mv2 ml1" style={{ width: "50%" }}>
          <Card.Header as="div">
            <div className="flex flex-row justify-between items-center">
              <h6>Saída</h6>
              <ClipBoardButton textToCopy={sampleInput.output} />
            </div>
          </Card.Header>
          <Card.Body>
            <pre>{sampleInput.output}</pre>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
export default SampleInputCart;

export type SampleInputCardProps = {
  sampleInput: SampleInput;
  className?: string;
};
