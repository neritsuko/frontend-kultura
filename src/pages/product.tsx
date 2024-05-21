import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { useParams } from 'react-router-dom';
import SingleProduct from '../elements/singleProduct/singleProduct';

const Product: React.FC = () => {
    const { products } = useContext(StoreContext)!;
    const { productId } = useParams<{ productId: string }>();
    const product = products.find((e) => e.id === Number(productId));

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div>
            <SingleProduct product={product} />
        </div>
    );
};

export default Product;
