import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Payment = () => {
  // const id = useParams();
  const data = useLoaderData();
  console.log(data);

  const handlePayment = (event) => {
    event.preventDefault();
    const form = event.target;
    const cardNumber = form.cardNumber.value;
    const expireDate = form.expireDate.value;
    const sslNumber = form.sslNumber.value;
    const payInfo = {
      cardNumber,
      expireDate,
      sslNumber,
      ...data,
    };

    fetch("https://assignment-12-sever-side-anis1020.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successfully Done",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log(data);
      });
    //cls delete from selected class compo
    fetch(
      `https://assignment-12-sever-side-anis1020.vercel.app/classDelete/${data._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handlePayment}>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Card Number</span>
            </label>
            <input
              type="text"
              name="cardNumber"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Expire Date</span>
            </label>
            <input
              type="text"
              name="expireDate"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">SSL Number</span>
            </label>
            <input
              type="text"
              name="sslNumber"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Pay Now</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payment;
