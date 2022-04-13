export const initOrderDetails = () => {
  let orderDetails = {
    orderNumber: "",
    date_created: "",
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
      shipping: { name: "", amount: "" },
      total: 0,
      tax: 0,
      subTotal: 0,
    },
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

export const captureOrder = async (token, setPaymentData, setLoading) => {
  const response = await fetch(process.env.URL + "/api/payment/capture-order", {
    method: "POST",
    body: JSON.stringify(token),
  });
  const data = await response.json();
  setPaymentData(data);
  setLoading(false);
};

export const processOrder = async (
  paymentData,
  orderDetails,
  orderNumber,
  Router
) => {
  if (paymentData.code == 200) {
    const dateTime = new Date();

    try {
      orderDetails.orderNumber = orderNumber;
      orderDetails.date_created = dateTime;
      orderDetails.payment.id = paymentData.data.id;
      orderDetails.payment.payer_id = paymentData.data.payer_id;
      orderDetails.payment.status = paymentData.data.status;
    } catch (err) {}
    setOrderDetails("orderDetails", orderDetails);

    saveOrder(orderDetails, orderDetails.user.id)
      .then((response) => {
        if (response.status == 200) {
          if (typeof window != "undefined") {
            Router.push(process.env.URL + "/thank-you");
          }
        } else {
          if (typeof window != "undefined") {
            Router.push(process.env.URL + "/error");
          }
        }
      })
      .catch((err) => {
        Router.push(process.env.URL + "/error");
      });
  } else {
    if (typeof window != "undefined") {
      Router.push(process.env.URL + "/error");
    }
  }
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
