const express = require("express");
const axios = require("axios");
const router = express.Router();
require("dotenv").config();

const BASE_URL = "https://checkout.sandbox.bka.sh/v1.2.0-beta"; // Use sandbox URL
let token = "";

// Get bKash Token
const getToken = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/checkout/token/grant`, {
      app_key: process.env.BKASH_APP_KEY,
      app_secret: process.env.BKASH_APP_SECRET,
    });
    token = response.data.id_token;
    return token;
  } catch (error) {
    console.error("Error fetching bKash token:", error.response.data);
    throw new Error("Failed to fetch bKash token.");
  }
};

// Create Payment
router.post("/createPayment", async (req, res) => {
  const { amount, invoiceNumber } = req.body;

  if (!amount || !invoiceNumber) {
    return res.status(400).send({ success: false, message: "Amount and Invoice Number are required." });
  }

  try {
    // Get token if not available
    if (!token) {
      await getToken();
    }

    const paymentResponse = await axios.post(
      `${BASE_URL}/checkout/payment/create`,
      {
        amount: amount,
        currency: "BDT",
        intent: "sale",
        merchantInvoiceNumber: invoiceNumber,
      },
      {
        headers: {
          authorization: token,
          "x-app-key": process.env.BKASH_APP_KEY,
        },
      }
    );

    if (paymentResponse.data && paymentResponse.data.paymentID) {
      res.send({
        success: true,
        bkashURL: paymentResponse.data.bkashURL,
      });
    } else {
      res.status(400).send({ success: false, message: "Failed to create payment." });
    }
  } catch (error) {
    console.error("Error creating bKash payment:", error.response.data);
    res.status(500).send({ success: false, message: "Error creating bKash payment." });
  }
});

// Execute Payment
router.post("/executePayment", async (req, res) => {
  const { paymentID } = req.body;

  if (!paymentID) {
    return res.status(400).send({ success: false, message: "Payment ID is required." });
  }

  try {
    const executeResponse = await axios.post(
      `${BASE_URL}/checkout/payment/execute/${paymentID}`,
      {},
      {
        headers: {
          authorization: token,
          "x-app-key": process.env.BKASH_APP_KEY,
        },
      }
    );

    res.send({ success: true, transactionStatus: executeResponse.data.transactionStatus });
  } catch (error) {
    console.error("Error executing bKash payment:", error.response.data);
    res.status(500).send({ success: false, message: "Error executing bKash payment." });
  }
});

module.exports = router;
