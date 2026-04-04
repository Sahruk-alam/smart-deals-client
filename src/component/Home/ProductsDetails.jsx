import React, { use, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const product = useLoaderData();
  const { _id: productId } = product;
  const [bids, setBids] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/products/bids/${productId}`)
    .then(res => res.json())
    .then(data => {
      console.log("Bids for the products : ", data);
      setBids(data);
    })
  },[productId])


  const modalRef = useRef(null);
  const { user } = use(AuthContext);
  const handleOpenModal = () => {
    modalRef.current.showModal();
  };
  const handleBidAmount = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const bidAmount = event.target.bidAmount.value;
    console.log(productId, name, email, bidAmount);
    const newBids = {
      product: productId,
      buyer_name: name,
      buyer_email: email,
      bid_price: bidAmount,
      status: "pending",
    };
    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBids),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Atfer insert bids : ", data);
        if(data.insertedId){
          // alert("Your bid has been placed successfully!");
          modalRef.current.close();
  Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your bids has been placed successfully!",
  showConfirmButton: false,
  timer: 1500
});

  newBids._id = data.insertedId;
  const updatedBids=[...bids, newBids];
  updatedBids.sort((a,b) => b.bid_price - a.bid_price);
  setBids(updatedBids);

        }
      });
  };
  return (
    <div>
      {/* product info */}
      <div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            className="w-62"
            alt={product.title}
          />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>

        <div>
          <button onClick={handleOpenModal} className="btn btn-primary">
            I want to buy the products
          </button>

          <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer</h3>
              <p className="py-4">Offer something seller can not resist!</p>

              <form onSubmit={handleBidAmount}>
                <fieldset className="fieldset">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    name="name"
                    readOnly
                    defaultValue={user?.displayName}
                    placeholder="Name"
                  />

                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                    placeholder="Email"
                  />

                  <label className="label">Bids amount</label>
                  <input
                    type="number"
                    className="input"
                    name="bidAmount"
                    placeholder="Bids amount"
                  />

                  <button className="btn btn-primary mt-4">Submit bid</button>
                </fieldset>
              </form>

              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <div className="gap-3 flex">
                    <button className="btn btn-error text-white mt-4">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bids for products */}
      <div>
        <h3 className="text-xl font-bold">Bids for this product:  <span className="text-primary">{bids.length}</span></h3>

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          SL No.
        </th>
        <th>Buyer name</th>
        <th>Buyer Email</th>
        <th>Bids price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        bids.map((bid, index) => (
          <tr>
            <th>{index + 1}</th>
            <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{bid.buyer_name}</div>
            </div>
          </div>
        </td>
        <td>
          {bid.buyer_email}
          <br />
          
        </td>
        <td>{bid.bid_price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">{bid.status}</button>
        </th>
      </tr>
     ))
      }
    
      
    </tbody>
  
  </table>
</div>
      </div>
    </div>
  );
};

export default ProductsDetails;
