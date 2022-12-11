import React, { useEffect, useState } from 'react';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData/products.json';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Review = () => {
    const [cart, setCart] = useState([]);

    const HandleReview=()=>{
        setCart([]);
        processOrder();


    }

    const removeReview = (productkey) => {
        console.log("clicking remove", productkey);
        const newCart = cart.filter(pd => pd.id !== productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);

    }

    useEffect(()=> {

        const savecart = getDatabaseCart();
        const productid = Object.keys(savecart);
        const cartProducts = productid.map( id => {
            const product =  fakeData.find( pd => pd.id === id);
            product.quantity = savecart[id];
            return product;
        });
            setCart(cartProducts);

        }, []);
        


    
    return (
        <div className='twin-container'>
        <div className='product-container'>
            {
                cart.map(pd => <ReviewItem  removeReview={removeReview} key ={pd.key} product={pd}></ReviewItem> )

            }
         

        </div>

        <div className='cart-container'>
            <Cart cart={cart}>
                <button onClick={HandleReview} className='main-button'>Place Order</button>
            </Cart>

        </div>

                
            
            
        </div>
    );
};

export default Review;