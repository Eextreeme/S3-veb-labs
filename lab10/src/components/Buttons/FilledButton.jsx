import Button from "./Button";

const FilledButton = ({ name, href, className, onClick }) => {
    return <Button name={name}
        href={href}
        className={`bg-gray-700 text-white text-sm px-[30px] py-[10px] rounded-[6px] transition-all hover:bg-gray-600 ${className}`}
        onClick={onClick}
    />
}

export default FilledButton;
