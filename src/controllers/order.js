export const initOrderDetails = () => {
  let orderDetails = {
    orderNumber: "",
    orderDesc: "",
    date_created: "",
    orderStatus: "processing",

    // for authorize.net
    accountNumber: "",
    accountType: "",
    networkTransId: "",
    transId: "",
    // for authorize.net
    userID: "",
    items: {},
    user: {},
    payment: {
      id: "",
      paymentMethod: "",
      currency: "",
      payer_id: "",
      status: "",
    },
    order: {
      shipping: { name: "", amount: "", description: "" },
      duty: { name: "", amount: "", description: "" },
      credit: { name: "", amount: "", description: "" },
      coupon: { name: "", amount: "", description: "" },
      taxDetail: { name: "", amount: "", description: "" },
      orderCommensts: "",
      giftNotes: "",
      total: "",
      tax: "",
      subTotal: "",
    },
    error: "",
  };
  return orderDetails;
};

export const setOrderDetails = (name, data) => {
  if (typeof window != "undefined") {
    localStorage.setItem(name, JSON.stringify(data));
  }
};

export const getOrderDetails = (name) => {
  let data = {};
  if (typeof window != "undefined") {
    try {
      data = JSON.parse(localStorage.getItem(name));
    } catch (err) {
      console.log(err);
    }
  }
  if (!data) {
    data = {};
  }
  return data;
};

export const saveOrder = async (orderDertails) => {
  const response = await fetch(process.env.URL + "/api/orders/createOrder", {
    method: "POST",
    body: JSON.stringify({
      orderDertails: orderDertails,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
};

export const getOrders = async (userID) => {
  const response = await fetch(process.env.URL + "/api/orders/getOrdersList", {
    method: "POST",
    body: JSON.stringify({ userID: userID }),
  });
  const orders = await response.json();
  return orders;
};

export const getOrdersByID = async (orderID) => {
  const response = await fetch(process.env.URL + "/api/orders/getOrdersByID", {
    method: "POST",
    body: JSON.stringify({ orderID: orderID }),
  });
  const orders = await response.json();
  return orders;
};
