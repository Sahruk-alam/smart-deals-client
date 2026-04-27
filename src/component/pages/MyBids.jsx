import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import axiosSecure from "../useAxios/axiosSecure";

const MyBids = () => {
  const { user } = use(AuthContext);
  const [bids, setBids] = useState([]);
  const axiosSecures = axiosSecure();
  useEffect(() => {
    axiosSecures.get(`/bids?email=${user.email}`).then((data) => {
      setBids(data.data);
    });
  }, [user, axiosSecures]);

  const handleRemoveBid = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        fetch(
          `https://smart-deals-api-server-sandy-rho.vercel.app/bids/${_id}`,
          {
            method: "DELETE",
          },
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) { 
              Swal.fire({
                title: "Deleted!",
                text: "Your bid has been deleted.",
                icon: "success",
              });
            }
            const remainingBids = bids.filter((bid) => bid._id !== _id);
            setBids(remainingBids);
          });
    });
  };
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold">
        My Bids: {bids.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>SL.</th>
              <th>Name</th>
              <th>Product</th>
              <th>Bid price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid, index) => (
              <tr key={bid._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{bid.buyer_name}</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  {bid.product}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {" "}
                    {bid.buyer_email}
                  </span>
                </td>
                <td>{bid.bid_price}</td>
                <th>
                  {bid.status === "pending" ? (
                    <div className="badge badge-warning">Pending</div>
                  ) : (
                    <div className="badge badge-success ">{bid.status}</div>
                  )}
                </th>
                <td>
                  <div
                    onClick={() => handleRemoveBid(bid._id)}
                    className="btn btn-outline btn-xs"
                  >
                    Remove bid
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBids;
