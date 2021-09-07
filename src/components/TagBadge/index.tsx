import { Badge } from "react-bootstrap";

const TagBadge = ({ tag }: TagBadgeProps) => {
    return (
        <Badge pill bg={getBgType(tag)} text={getTextType(tag)} className="mh1">
            {tag}
        </Badge>
    );
}
export default TagBadge;

export type TagBadgeProps = {
    tag: string
}

const getBgType = (tagName: string) => {
    switch (tagName.toLowerCase()) {
        case "dfs":
            return "primary";
        case "grafo":
            return "secondary";
        case "ad hoc":
            return "success";
        case "dp":
            return "danger";
        case "guloso":
            return "warning";
        case "geometria":
            return "info";
        case "matemática":
            return "light";
        default:
            return "dark"
    }
}

const getTextType = (tagName: string) => {
    switch (tagName.toLowerCase()) {
        case "dfs":
            return "light";
        case "grafo":
            return "light";
        case "ad hoc":
            return "light";
        case "dp":
            return "light";
        case "guloso":
            return "dark";
        case "geometria":
            return "light";
        case "matemática":
            return "dark";
        default:
            return "light"
    }
}