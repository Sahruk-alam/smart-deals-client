import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {
    const {title,price_min,price_max} = product;
    return (
        <div className="card mt-11 bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>From ${price_min} to ${price_max}</p>
    <div className="card-actions">
      <Link to={`/productsdetails/${product._id}`} className="btn w-full btn-primary">View details</Link>
    </div>
  </div>
</div>
    );
};

export default Product;