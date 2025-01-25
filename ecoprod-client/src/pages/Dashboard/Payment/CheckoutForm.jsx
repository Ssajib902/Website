import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const response = await axiosSecure.post("/create-payment-intent", {
          price: totalPrice,
        });
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Error creating payment intent:", err);
      }
    };

    if (totalPrice > 0) {
      createPaymentIntent();
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.error("Payment error:", error);
      setError(error.message);
    } else {
      console.log("Payment Method:", paymentMethod);
      setError("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "black",
                "::placeholder": {
                  color: "red",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm bg-orange-600 text-white my-4"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-orange-600">{error}</p>
      </form>
    </>
  );
};

export default CheckoutForm;

// import {
//   CardCvcElement,
//   CardElement,
//   useElements,
//   useStripe,
// } from "@stripe/react-stripe-js";
// import React, { useEffect, useState } from "react";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";
// import useCart from "../../../Hooks/useCart";

// const CheckoutForm = () => {
//   const [error, setError] = useState('');
//   const [clientSecret, setClientSecret] = useState('');
//   const stripe = useStripe();
//   const elements = useElements();
//   const axiosSecure = useAxiosSecure();
//   const [cart] = useCart();
//   const totalPrice = cart.reduce((total, item)=> total + item.price, 0)

//   useEffect( async() =>{
//     axiosSecure.post('/create-payment-intent', {price: totalPrice})
//     .then(res=> {
//         // console.log(res.data.clientSecret);
//         setClientSecret(res.data.clientSecret);
//     })
//   }, [axiosSecure, totalPrice])

//   const handleSubmit = async(event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return
//     }

//     const card = elements.getElement(CardElement);

//     if (card === null) {
//       return
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card
//     });
//     if (error) {
//       console.log('Payment error', error);
//       setError(error.message);
//     }
//     else {
//       console.log('Payment Method', paymentMethod);
//       setError('');
//     }
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "white",
//                 "::placeholder": {
//                   color: "green",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button
//           className="btn btn-sm btn-primary my-4"
//           type="submit"
//           disabled={!stripe || !clientSecret}>
//           Pay
//         </button>
//         <p className="text-red-600">{error}</p>
//       </form>
//     </>
//   );
// };

// export default CheckoutForm;
