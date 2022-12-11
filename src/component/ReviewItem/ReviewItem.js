import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, id, price}= props.product;
    const reviewStyle ={
        borderBottom: '1px solid gray',
        marginBottom: '5px', 
        paddingBottom: '5px',
        marginLeft: '200px'
    }
    return (
        <div style={reviewStyle} className="review-item">
            <h1 className="product-name">{name}</h1>
            <p>quantity:{quantity}</p>
            <p><small> ${price}</small></p>
            <br></br>
            <button  onClick={()=> props.removeReview(id)} className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;