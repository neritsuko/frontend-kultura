import React from 'react' 
import './new.css'
import newProducts from '../products/newProducts'
import Items from '../items/items'

const New = () => {
    return (
        <div className='new'>
           <h1>Новинки</h1> 
           <hr/>
           <div className="new-item">
            {newProducts.map((item,i)=>{
                return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

            })}

           </div>
        </div>
    )
}

export default New