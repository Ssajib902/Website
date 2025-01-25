import React from "react";
import Swal from "sweetalert2";
import "./customSwal.css"; // Import the custom CSS file

const CashOnDelivery = () => {
  const handleConfirmOrder = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to confirm this order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4CAF50",
      cancelButtonColor: "#FF5722",
      confirmButtonText: "Yes, confirm it!",
      cancelButtonText: "No, cancel!",
      customClass: {
        popup: "custom-popup",
        title: "custom-title",
        htmlContainer: "custom-text",
        confirmButton: "custom-confirm-button",
        cancelButton: "custom-cancel-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Confirmed!",
          text: "Your order has been confirmed.",
          icon: "success",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            htmlContainer: "custom-text",
          },
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Your order was not confirmed.",
          icon: "error",
          customClass: {
            popup: "custom-popup",
            title: "custom-title",
            htmlContainer: "custom-text",
          },
        });
      }
    });
  };

  return (
    <>
      <h1 className="font-bold text-center mb-5">
        Payment when you get your Product on your Hand
      </h1>
      <ul className="mb-5">
        <li>
          <span className="font-bold">1. </span>You may pay in cash to our courier upon receiving your parcel at the
          doorstep.
        </li>
        <li>
          <span className="font-bold">2. </span>Before agreeing to receive the parcel, check if your delivery status
          has been updated to 'Out for Delivery'.
        </li>
        <li>
          <span className="font-bold">3. </span>Before receiving, confirm that the airway bill shows that the parcel
          is from Daraz.
        </li>
        <li>
          <span className="font-bold">4. </span>Before you make payment to the courier, confirm your order number,
          sender information and tracking number on the parcel.
        </li>
      </ul>
      <button
        className="bg-red-600 text-white font-bold p-4 rounded mt-5 flex items-center"
        onClick={handleConfirmOrder}
      >
        Confirm Order..?
      </button>
    </>
  );
};

export default CashOnDelivery;
