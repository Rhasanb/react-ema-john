import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/products.json';
import Product from '../Product/Product';

const Prodetail = () => {
    const {productid}= useParams();
    const product = fakeData.find(pd => pd.id === productid);
    

    return (
        <div>
            <h1>{productid}Product Detail comming sooon</h1>
           <Product showAddToCart ={false} product={product}></Product>
           
        </div>
    );
};

export default Prodetail;