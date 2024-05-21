import React, { useContext, useState } from 'react';
import './bar.css'
import logo from '../products/logo.png'
import cart from '../products/cart.png'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';
const Bar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(StoreContext);
  return (
    <div>
      <bar/>
      <div className='navbar'>
            <div className='navbar-logo'>
                <Link to='/'><img src={logo} alt="" class="small-image1"/></Link>
            </div>
            <ul className='navbar-menu'>
                <li onClick={()=>{setMenu("магазин")}}><Link style={{ textDecoration: 'none' }} to='/'>Магазин</Link>{menu==="магазин"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("книги")}}><Link style={{ textDecoration: 'none' }} to='/books'>Книги</Link>{menu==="книги"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("винил")}}><Link style={{ textDecoration: 'none' }} to='/vinyls'>Винил</Link>{menu==="винил"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("игры")}}><Link style={{ textDecoration: 'none' }} to='/games'>Настольные игры</Link>{menu==="игры"?<hr/>:<></>}</li>
                <li onClick={()=>{ setMenu("канц") }}><Link style={{ textDecoration: 'none' }} to='/supplies'>Канцтовары</Link>{menu==="канц"?<hr />:<></>}</li>
            </ul>
            <div className='navbar-login-cart'>
                <Link to='/login'><button>Войти</button></Link>
                <Link to='/cart'><img src={cart} alt="" class="small-image2"/></Link> 
                <div className="navbar-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>    
    </div>
  );
}

export default Bar
              