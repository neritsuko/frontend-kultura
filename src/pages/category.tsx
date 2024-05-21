// Category.tsx
import React, { useContext } from 'react';
import Slider from 'react-slick';
import './category.css';
import { StoreContext } from '../context/storeContext';
import Items from '../elements/items/items';

interface Product {
    id: number;
    name: string;
    image: string;
    new_price: number;
    old_price: number;
    category: string;
}

interface Props {
    banners: string[];
    category: string;
}

const Category: React.FC<Props> = (props) => {
    const { products } = useContext(StoreContext)!;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='store-category'>
            <Slider {...sliderSettings}>
                {props.banners.map((banner, index) => (
                    <div key={index}>
                        <img src={banner} alt={`Banner ${index + 1}`} className='img-banner' />
                    </div>
                ))}
            </Slider>
            <div className="store-category-index">
                <p>
                    <span>1-12 товаров</span> из {products.length}
                </p>
            </div>
            <div className="store-category-products">
                {products.map((item: Product, i: number) => {
                    if (props.category === item.category) {
                        return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
}

export default Category;
