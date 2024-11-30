
const SingleProductPage = ({ product }) => {
    const { name, img , fullDescription, watchers, buyers} = product;
    return <div className='flex justify-evenly mb-[200px]'>
        <div>
        <div className='flex justify-evenly mb-[200px]'>
            {/* Зображення товару */}
            <div>
                {img ? (
                    <img 
                        src={img} 
                        alt={name} 
                        className='w-[1000px] h-[400px] object-cover rounded-md shadow-lg'
                    />
                ) : (
                    <div className='w-[300px] h-[300px] flex items-center justify-center bg-gray-200 text-gray-500 rounded-md'>
                        Зображення відсутнє
                    </div>
                )}
            </div>
        </div>

        </div>
        <div className="ml-4">
            <h1 className='font-bold text-3xl mb-2'>{name}</h1>
            <div className='flex gap-2'>
                <div className='text-sm border rounded-[6px] px-2 py-1 w-fit'>
                    {`Перегляди: ${watchers}`}
                </div>
                <div className='text-sm border rounded-[6px] px-2 py-1 w-fit'>
                    {`Куплено: ${buyers}`}
                </div>
            </div>
            <p className='my-4'>{fullDescription}</p>
        </div>
    </div>
}

export default SingleProductPage;
