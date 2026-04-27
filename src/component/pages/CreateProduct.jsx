// import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

// import useAxios from '../useAxios/useAxios';
import useAuth from '../../Hook/useAuth';
import axiosSecure from '../useAxios/axiosSecure';

const CreateProduct = () => {
 
    const {user}=useAuth();

    // const axiosInstance=useAxios();
    const useAxiosSecure=axiosSecure();
    
    const handleCreateProduct = (e) => {
        e.preventDefault();
        const title_create= e.target.title.value;
        const minPrice= e.target.minPrice.value;
        const category1= e.target.category.value;
        const productCondition= e.target.productCondition.value;
        const maxPrice= e.target.maxPrice.value;
        const usageTime= e.target.usageTime.value;
        const imageUrl= e.target.imageUrl.value;
        const sellerName= e.target.sellerName.value;
        const sellerContact= e.target.sellerContact.value;
        const sellerEmail= e.target.sellerEmail.value;
        const sellerImageUrl= e.target.sellerImageUrl.value;
        const location1= e.target.location.value;
        const description1= e.target.description.value;
        // e.target.reset();

        const newProduct = {
            title: title_create,
            price_min: minPrice,
            price_max: maxPrice,
            email: sellerEmail,
            image: imageUrl,
            category: category1,
            location: location1,
            seller_image: sellerImageUrl, 
            seller_name: sellerName,
            condition: productCondition,
            usage:usageTime,
            description: description1,
            seller_contact: sellerContact,     
        };

        // console.log('Form submitted',title_create, minPrice, category1, productCondition, maxPrice, usageTime, imageUrl, sellerName, sellerContact, sellerEmail, sellerImageUrl, location1, description1);
        
        useAxiosSecure.post('/products', newProduct)
        .then(data=>{
            console.log('Product created:', data.data);
        })
    }

    return (
      <div className='bg-base-200 py-12 '>
          <div className='mx-8'>
            <h2 className='text-center  text-xl'>Back to Product</h2>
            <h2 className='text-center font-bold mt-4 text-3xl'>Create <span className='text-primary'>A Product</span></h2>
            
         <form onSubmit={handleCreateProduct} className='bg-white p-6 mt-14 shadow-2xl rounded-xl'>
                <div className='flex flex-col md:flex-row gap-8 '>
                <div className=''>
                    <label className="">Title</label>
                    <input type="text" name='title' placeholder="Type here" className="input input-bordered w-full " />
                    <label className="">Min Price You want to Sale ($)</label>
                    <input type="text" name='minPrice' placeholder="Type here" className="input input-bordered w-full " />
                    <label className="">Product Condition</label>
                    <div className='flex gap-3'>
                        <div>
                            <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-50 border p-4">
                           
                            <label className="label">
                             <input type="checkbox" name='productCondition' value='brand-new'  className="checkbox" />
                               Brand new
                             </label>
                            </fieldset>
                        </div>
                        <div>
                 <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-50 border p-4">
                    <label className="label">
                  <input type="checkbox" name='productCondition' value='used'  className="checkbox" />
                      Used
                     </label>
                        </fieldset>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="">Category</label>
                    <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full " />
                    <label className="">Max Price You want to Sale ($)</label>
                    <input type="text" name='maxPrice' placeholder="Type here" className="input input-bordered w-full " />
                    <label className="">Product Usage time</label>
                    <input type="text" name='usageTime' placeholder="e.g 1 year 3 month" className="input input-bordered w-full " />
                </div>
            </div>
            <label className="">Your Product image URL</label>
            <input type="text" name='imageUrl' placeholder="https://.." className="input input-bordered w-full " />
        <div className='flex gap-5 mt-8'>

            <div>
         <label className="">Seller Name</label>
                    <input type="text" name='sellerName' placeholder="e.g. Artisan Roasters" className="input input-bordered w-full " />
                    <label className="">Seller Contact</label>
                    <input type="text" name='sellerContact' placeholder="e.g. +1-555-1234" className="input input-bordered w-full " />
            </div>

            <div>
         <label className="">Seller Email</label>
                    <input type="text" name='sellerEmail' placeholder="e.g. artisan@roasters.com" className="input input-bordered w-full " />
                    <label className="">Seller Image URL</label>
                    <input type="text" name='sellerImageUrl' placeholder="https://.." className="input input-bordered w-full " />
            </div>
        </div>
          <label className="">Location</label>
            <input type="text" name='location' placeholder="city country" className="input input-bordered w-full " />
          <label className="">Simple Description about your Product</label>
            <input type="text" name='description' placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning
              guitar is so tough..... " className="input input-bordered w-full " />
        
        <button className="btn mt-12 w-full btn-primary">Create Product</button>
        
    </form>
        </div>
      </div>
    );
};

export default CreateProduct;