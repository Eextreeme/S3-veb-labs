import Button from "./Button";

const EmptyButton = ({name, href, className}) => {
    return <Button name={name}
        href={href}
        className={`text-sm px-[30px] py-[10px] rounded-[8px] transition-all hover:bg-slate-100 ${className}`}
    />
}

export default EmptyButton;
