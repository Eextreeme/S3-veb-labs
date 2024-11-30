const FilterSelect = ({name, defaultOption, options}) => {
    return (
        <select name={name} id={name} className="text-sm py-1 px-4 max-w-[200px] rounded-[8px] transition-all hover:bg-slate-100" >
            {
                defaultOption ? <option value="">{defaultOption}</option> : null
            }
            {
                options.map((option, idx) => {
                    return <option key={idx} value={option.value}>{option.name}</option>;
                })
            }
        </select>
    );
}

export default FilterSelect;
