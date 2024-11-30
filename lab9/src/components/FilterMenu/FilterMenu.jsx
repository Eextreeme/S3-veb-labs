import EmptyButton from "../Buttons/EmptyButton";
import FilterSelect from "../FilterSelect/FilterSelect";
import SearchInput from "../Inputs/SearchInput";

const filters = [
    {
        name: 'sortOrder',
        options: [
            {
                name: 'From lower to bigger',
                value: 'toHigher'
            },
            {
                name: 'From bigger to lower',
                value: 'toLower',
            },
        ],
    },
];

const FilterMenu = ({ onApply }) => {
    return <div className="fixed w-[80%] ml-[4vw]">
        <div className="border bg-white rounded-[6px] flex justify-between p-2">
            <div className="filters flex gap-2">
                {
                    filters.map((filter, idx) => {
                        return <FilterSelect
                            key={idx}
                            name={filter.name}
                            defaultOption={filter.defaultOption}
                            options={filter.options}
                        />
                    })
                }
            </div>
            <SearchInput/>
            <EmptyButton name="Apply" className="border" onClick={() => {
                onApply();
            }}/>
        </div>
    </div>
}

export default FilterMenu;
