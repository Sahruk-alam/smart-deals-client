import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const AllProducts = () => {
const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => {
                console.log("All Products : ", data);
                setProducts(data);
            });
}, []);
    return (
       <div>
        <h2 className='text-center text-3xl font-semibold'>All Products</h2>
         <h2 className='text-center text-2xl '>Number of Products : {products.length}</h2>
         <div className=' grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
           
            {
            products.map(product => (
            <div className="card mt-11 bg-base-100 shadow-sm">
                
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.title}</h2>
    <p>From ${product.price_min} to ${product.price_max}</p>
    <div className="card-actions">
      <Link to={`/productsDetails/${product._id}`} className="btn w-full btn-primary">View details</Link>
    </div>
  </div>
</div>
        
            ))
            
            }

        </div>
       </div>
    );
};

export default AllProducts;