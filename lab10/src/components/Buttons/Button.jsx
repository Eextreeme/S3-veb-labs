import { Link } from "react-router-dom";

const Button = ({name, href, className, onClick}) => {
    return (
        <Link to={href}>
            <button className={className} onClick={onClick}>
                {name}
            </button>
        </Link>
    );
}

export default Button;
