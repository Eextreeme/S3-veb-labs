import FilledButton from "../Buttons/FilledButton";

const CatalogProductCard = ({ item }) => {
    const { name, description, img, Price, id } = item;

    return (
        <div className="border rounded-[8px] p-4 max-w-[350px] transition-all hover:shadow-xl">

            {img ? (
                <img
                    src={img} 
                    alt={name} 
                    className="w-full h-[200px] object-cover rounded-md mb-2" 
                />
            ) : (
                <div className="h-[200px] flex items-center justify-center bg-slate-300 text-gray-500 rounded-md">
                    Зображення відсутнє
                </div>
            )}

            <p className="font-semibold">{name}</p>
            <p className="mb-2">{description}</p>
            <p className="font-semibold">{`Ціна: ${Price}$`}</p>
            <FilledButton name="Про Товар" className="w-full" href={`/catalog/${id}`} />
        </div>
    );
};

export default CatalogProductCard;