import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Link} from'react-router-dom';


const Product = (props) => {
    
   

    
    return (
        <div className="product">
            <div>
                <img src={props?.product?.img} alt="" />
            </div>

            <div className="change">
                <h4 className="product-name"><Link to={"/product/"+ props?.product?.id}>{props?.product?.name}</Link></h4>

                <br></br>
                <p><small>by : {props?.product?.seller}</small></p>
                <p>${props?.product?.price}</p>
                <br></br>
                <p><small>Only {props?.product?.stock} left in stock</small></p>
            
            { props.showAddToCart && <button className='main-button'  
            onClick = {() => props.handleAddProduct(props.product)}> 
            <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>}
            

            </div>



        </div>
    );
    
};

export default Product;