import FilledButton from "../Buttons/FilledButton";

const CatalogProductCard = ({ item }) => {
    const { name, description, img, ...properties } = item;

    return <div
        onClick={(e) => {
            e.preventDefault();

            // router to product page
        }}
        className="border rounded-[8px] p-4 max-w-[350px]">

        {
            img ? img
            :
            <div className="h-[200px] bg-slate-300"></div>
        }
        <p className="font-semibold">{name}</p>
        <p className="mb-2">{description}</p>
        <ul className="font-semibold text-sm mb-2">Properties:
        {
            Object.keys(properties).map((el, idx) => {
                return <li className="font-normal">{`${el}: ${Object.values(properties)[idx]}`}</li>
            })
        }
        </ul>
        <FilledButton name="View More" className="w-full" />
    </div>
}

export default CatalogProductCard;
