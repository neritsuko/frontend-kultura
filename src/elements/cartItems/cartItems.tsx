import React, { useContext } from 'react';
import './cartItems.css';
import { StoreContext } from '../../context/storeContext';
import cross from '../products/cross.png';

const CartItems: React.FC = () => {
    const { getTotalCartAmount, products, cartItems, removeFromCart } = useContext(StoreContext)!;

    return (
        <div className='cart-items'>
            <div className='cart-item-titles'>
                <p>Товары</p>
                <p>Название</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Итог</p>
                <p>Удалить</p>
            </div>
            <hr />
            {products.map((product) => {
                if (cartItems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cart-items-info cart-item-titles">
                                <img src={product.image} alt="" className='cart-items-icon' />
                                <p>{product.name}</p>
                                <p>{product.new_price}₸</p>
                                <p className='cart-items-quantity'>{cartItems[product.id]}</p>
                                <p>{product.new_price * cartItems[product.id]}₸</p>
                                <img className='cart-items-remove-icon' src={cross} onClick={() => { removeFromCart(product.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Итого в корзине</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Промежуточный итог</p>
                            <p>{getTotalCartAmount()}₸</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Стоимость доставки</p>
                            <p>Бесплатно</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Итого</h3>
                            <h3>{getTotalCartAmount()}₸</h3>
                        </div>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
