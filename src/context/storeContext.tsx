import React, { useState, createContext, ReactNode } from 'react';
import products from '../elements/products/products';

export interface Product {
    id: number;
    name: string;
    category: string;
    image: string;
    description: string;
    new_price: number;
    old_price: number;
}

interface CartItems {
    [itemId: number]: number;
}

interface StoreContextType {
    getTotalCartItems: () => number;
    getTotalCartAmount: () => number;
    products: Product[];
    cartItems: CartItems;
    addToCart: (itemId: number) => void;
    removeFromCart: (itemId: number) => void;
}

export const StoreContext = createContext<StoreContextType | null>(null);

const getDefaultCart = (): CartItems => {
    let cart: CartItems = {};
    for (let index = 0; index < products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const StoreContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [cartItems, setCartItems] = useState<CartItems>(getDefaultCart());

    const addToCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId: number) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const getTotalCartAmount = (): number => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = products.find((product) => product.id === Number(item));
                if (itemInfo) { // Проверяем, не равен ли itemInfo undefined
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = (): number => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue: StoreContextType = {
        getTotalCartItems,
        getTotalCartAmount,
        products,
        cartItems,
        addToCart,
        removeFromCart,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
