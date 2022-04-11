import React from "react";

const order = () => {
  let cart = [];

  orderDetails = {
    order: {
      id: 0,
      number: "",
      status: "processing",
      currency: "USD",
      date_created: "",
      date_modified: "",
      discount_total: 0.0,
      shipping_total: 0.0,
      discount_tax: 0.0,
      shipping_tax: 0.0,
      cart_tax: 0.0,
      total_tax: 0.0,
      total: 0,
      customer_id: 0,
      customer_note: "",
    },
    billing: {
      first_name: "John",
      last_name: "Doe",
      company: "",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
      email: "john.doe@example.com",
      phone: "(555) 555-5555",
    },
    shipping: {
      first_name: "John",
      last_name: "Doe",
      company: "",
      address_1: "969 Market",
      address_2: "",
      city: "San Francisco",
      state: "CA",
      postcode: "94103",
      country: "US",
    },

    payment_method: {
      payment_method: "",
      payment_method_title: "",
      transaction_id: "",
      date_paid: "",
    },

    cart_items: cart,

    tax_lines: [
      {
        id: 0,
        rate_code: "",
        rate_id: 0,
        label: "",
        tax_total: 0,
        shipping_tax_total: 0,
      },
    ],
    shipping_method: {
      id: 0,
      method_title: "",
      method_id: 0,
      amount: 100,
      total_tax: 2,
      total: 12,
    },
  };

  return <div>order</div>;
};

export default order;
