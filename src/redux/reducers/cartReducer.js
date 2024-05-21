const initialState = {
  items: [],
  totalItems: 0,
  cartItems: {} 
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART':
          return {
              ...state,
              items: [...state.items, action.payload],
              totalItems: state.totalItems + 1
          };
      case 'REMOVE_FROM_CART':
          return {
              ...state,
              items: state.items.filter(item => item !== action.payload),
              totalItems: state.totalItems - 1
          };
      case 'UPDATE_CART_COUNT':
          return {
              ...state,
              cartCount: action.payload
          };
      default:
          return state;
  }
};
