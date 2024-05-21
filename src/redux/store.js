import { createStore, combineReducers } from 'redux';
import menuReducer from './reducers/menuReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  menu: menuReducer,
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
