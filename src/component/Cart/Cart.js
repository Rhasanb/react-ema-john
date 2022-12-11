import React from 'react';
// import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd)=> total + prd.price, 0);

    let total = 0;
    for( let i=0; i<cart.length; i++){
        const product = cart[i];
        total= total+product.price* product.quantity;
        

    }
    let shipping = 0;
    if(total>500){
        shipping=0;
    }
    else if(total > 400){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total /10).toFixed(2);
    const TotalPrice = (total+shipping+Number(tax)).toFixed(2)
    return (
        <div>
            <h4 className="text-primary">Order Summery</h4>
            <p>Items Order:{cart.length}</p>
            <p><small>Tax + VAT:{tax}</small></p>
            <p><small>Shipping Cost:{shipping}</small></p>
            <p>Total Price:{TotalPrice}</p>
            <br></br>
            {/* <Link to="/review"><button className='main-button'>Review Order</button></Link> */}
           
            {
                    props.children
            }
        </div>
    );
};

export default Cart;