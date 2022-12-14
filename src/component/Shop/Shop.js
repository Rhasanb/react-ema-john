import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/products.json';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/fakedb';


const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        const savecart = getDatabaseCart();
        const productkey = Object.keys(savecart);
        const previouscart = productkey.map(pdKey => {
            const product = fakeData.find(pd => pd.id === pdKey);
            product.quantity = savecart[pdKey];
            return product;

        });

        setCart(previouscart);
                

    },[])
    

    function handleAddProduct (product){
    
        const toBeAdded = product.id;
        const sameProduct = cart.find(pd => pd.id === toBeAdded);
        let count = 1;
        let newCart;
        if(sameProduct){
                     count = sameProduct.quantity+1;
                     sameProduct.quantity = count;
                     const others= cart.filter(pd => pd.id !== toBeAdded);
                     newCart = [...others, sameProduct];
                     

                }
                else{
                    product.quantity = 1;
                    newCart = [...cart, product];
                    

                }
        
     
                setCart(newCart);
        addToDatabaseCart(product.id , count);
    }
        

        

    

    return (
        <div className='twin-container'>
            <div className='product-container'>

                {
                    products.map(pd => <Product key ={pd.key} showAddToCart ={true} handleAddProduct={handleAddProduct} product={pd}></Product>)
                }


            </div>

            <div className='cart-container'>
                
                <Cart cart={cart}>
                    
                    <Link to="/review"><button className='main-button'>Review Order</button></Link>
                </Cart>
            

            </div>



        </div>
    );
};

export default Shop;