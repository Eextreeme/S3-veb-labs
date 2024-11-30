import ProductCard from '../../components/ProductCard/ProductCard';
import FilledButton from '../../components/Buttons/FilledButton';

const products = [
    {
        name: 'title',
        description: 'sdvi vfdjn v dsovn spvodsm knvosivn',
        img: null,
    },
    {
        name: 'title',
        description: 'ionfvno uoi dfpnonf',
        img: null,
    },
    {
        name: 'title',
        description: 'op mfdinonfi ipnfon in fodns ',
        img: null,
    },
    {
        name: 'title',
        description: 'fsv mopfvs vslkdfnvv fdsv',
        img: null,
    },
];

const CatalogPreview = () => {
    return <>
        <div className="flex gap-4 justify-center pb-4">
            {
                products.slice(0, 3).map((el, idx) => {
                    return <ProductCard title={el.name} desc={el.description} img={el.img} />
                })
            }
        </div>
        <div className="flex justify-center">
            <FilledButton name="View More" className="mx-auto" />
        </div>
    </>
}

export default CatalogPreview;
