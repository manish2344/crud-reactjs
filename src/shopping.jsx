import React from 'react';
import './shopping.css'
const Shopping = ({ cart }) => {
    return ( <div className='shop'> {
            cart.map((value) => {
                return ( <div>
                    <img src = { value.img }
                    alt = "" />
                    <h5> { value.name } </h5>  
                     <button> - </button> 
                    <h3> { value.quantity } </h3> 
                    <button> + </button>
                    <h6> $ { value.price } </h6> 
                    </div>
                )
            })
        } </div>
    );
}

export default Shopping;