const FilledButton = ({name, href, className}) => {
    return <button className={`bg-gray-700 text-white text-sm px-[30px] py-[10px] rounded-[6px] transition-all hover:bg-gray-600 ${className}`}>
        {name}
    </button>
}

export default FilledButton;
