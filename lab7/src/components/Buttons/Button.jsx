import { Link } from "react-router-dom";

const Button = ({name, href, className}) => {
    return (
        <Link to={href}>
            <button className={className}>
                {name}
            </button>
        </Link>
    );
}

export default Button;
