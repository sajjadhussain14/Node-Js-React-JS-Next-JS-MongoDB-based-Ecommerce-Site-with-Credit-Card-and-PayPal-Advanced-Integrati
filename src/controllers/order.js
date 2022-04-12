export const initOrderDetails = () => {
  let orderDetails = {
    orderNumber: "",
    items: [],
    user: [],
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
