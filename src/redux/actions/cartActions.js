
export const addToCart = (productId) => {
    return {
      type: 'ADD_TO_CART',
      payload: productId
    };
  };
  
  export const removeFromCart = (productId) => {
    return {
      type: 'REMOVE_FROM_CART',
      payload: productId
    };
  };
  
  export const updateCartCount = (count) => {
    return {
      type: 'UPDATE_CART_COUNT',
      payload: count
    };
  };