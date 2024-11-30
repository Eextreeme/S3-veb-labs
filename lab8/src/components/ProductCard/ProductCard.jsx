import { Link } from 'react-router-dom';
import band7 from '../../img_db/band7.jpg'


const ProductCard = ({title, desc, img, productPageHref, className, withoutCard = false}) => {
    return <Link to={productPageHref}>
        <div className={`border rounded-[8px] p-4 max-w-[200px] h-full ${className}`}>
                {img ? (
                    <img
                        src={img} 
                        alt={title} 
                        className="w-full h-[120px] object-cover rounded-md mb-2" 
                    />
                ) : (
                    !withoutCard && (
                        <div className="h-[100px] flex items-center justify-center bg-slate-300 text-gray-500 rounded-md">
                            Зображення відсутнє
                        </div>
                    )
                )}
            <p className="font-semibold">{title}</p>
            <p>{desc}</p>
        </div>
    </Link>
}

export default ProductCard;
