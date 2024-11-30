const EmptyButton = ({name, href, className}) => {
    return <button className={`text-sm px-[30px] py-[10px] rounded-[8px] transition-all hover:bg-slate-100 ${className}`}>
        {name}
    </button>
}

export default EmptyButton;
