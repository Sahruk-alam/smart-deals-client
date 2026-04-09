import React, { use } from 'react';
import Product from './Product';

const Recent = ({ recentProducts }) => {
    const resProducts=use(recentProducts);
    console.log(resProducts);
    return (
        <div className='bg-gray-100 py-8'>
            <h2 className='text-center text-4xl'>Recent Products</h2>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4'>
             {
                resProducts.map(product => <Product key={product._id} product={product}></Product>)
            }
           </div>
        </div>
    );
};
 
export default Recent;