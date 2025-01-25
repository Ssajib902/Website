import React, { useState } from 'react';
import axios from 'axios';

const BkashPayment = () => {
  const [paymentID, setPaymentID] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BDT');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentURL, setPaymentURL] = useState('');

  // Function to handle the payment submission
  const handlePayment = async (e) => {
    e.preventDefault();

    if (!paymentID || !amount) {
      setError('Payment ID and Amount are required');
      return;
    }

    try {
      setLoading(true);
      setError('');

      const response = await axios.post('http://localhost:5000/bkash/payment', {
        paymentID: paymentID,
        amount: amount,
        currency: currency,
      });

      // Set the payment URL or other response data as needed
      setPaymentURL(response.data.bkashURL);
      setLoading(false);
    } catch (err) {
      setError('Payment failed. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Bkash Payment</h2>

      <form onSubmit={handlePayment}>
        <div>
          <label>Payment ID:</label>
          <input
            type="text"
            value={paymentID}
            onChange={(e) => setPaymentID(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Amount (BDT):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Pay with Bkash'}
        </button>

        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>

      {paymentURL && (
        <div>
          <h3>Payment URL</h3>
          <a href={paymentURL} target="_blank" rel="noopener noreferrer">
            Click here to pay with Bkash
          </a>
        </div>
      )}
    </div>
  );
};

export default BkashPayment;
