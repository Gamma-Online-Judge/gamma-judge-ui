import { Badge } from "react-bootstrap";

const TagBadge = ({ tag }: TagBadgeProps) => {
  return (
    <Badge pill bg="primary" className="mh1">
      {tag}
    </Badge>
  );
};
export default TagBadge;

export type TagBadgeProps = {
  tag: string;
};