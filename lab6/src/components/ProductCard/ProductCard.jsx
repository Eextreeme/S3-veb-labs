const ProductCard = ({title, desc, img, productPageHref}) => {
    return <div
        onClick={(e) => {
            e.preventDefault();

            // router to product page
        }}
        className="border rounded-[8px] p-4 max-w-[200px]">

        {
            img ? img
            :
            <div className="h-[100px] bg-slate-300"></div>
        }
        <p className="font-semibold">{title}</p>
        <p>{desc}</p>
    </div>
}

export default ProductCard;
