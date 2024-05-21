import React from 'react' 
import './best.css'
import best_products from '../products/bestProducts'
import Items from '../items/items'
const Best = () => {
    return (
        <div className='best' id='best'>
            <h1>Лучшие товары</h1>
            <hr />
            <div className="best-item">
                {best_products.map((item,i)=>{
                    return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            
        </div>
    )
}

export default Best