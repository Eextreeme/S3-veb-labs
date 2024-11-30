import EmptyButton from "../Buttons/EmptyButton";
import FilterSelect from "../FilterSelect/FilterSelect";

const filters = [
    {
        name: 'Sort By',
        defaultOption: 'Filter by ...',
        options: [
            'Popular',
            'Price',
        ],
    },
    {
        name: 'Sort By',
        defaultOption: 'Order ...',
        options: [
            'From lower to bigger',
            'From bigger to lower',
        ],
    },
];

const FilterMenu = () => {
    return <div className="border rounded-[6px] flex justify-between p-2">
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
        <EmptyButton name="Apply" className="border" />
    </div>
}

export default FilterMenu;
