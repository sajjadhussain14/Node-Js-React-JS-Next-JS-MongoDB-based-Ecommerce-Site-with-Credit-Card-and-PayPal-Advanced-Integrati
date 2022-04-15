import { setOrderDetails, saveOrder } from "./order";

export const captureOrder = async (token, setPaymentData, setLoading) => {
  const response = await fetch(
    process.env.URL + "/api/payment/paypal/capture-order",
    {
      method: "POST",
      body: JSON.stringify(token),
    }
  );
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
            orderDetails.error =
              "Payment Transaction Successfull but Order Save to DB failed";
            setOrderDetails("orderDetails", orderDetails);
            setTimeout(() => {
              Router.push("/error");
            }, 0);
          }
        }
      })
      .catch((err) => {
        orderDetails.error =
          "Payment Transaction Successfull but Order Save to DB failed";

        setOrderDetails("orderDetails", orderDetails);
        setTimeout(() => {
          Router.push("/error");
        }, 0);
      });
  } else {
    if (typeof window != "undefined") {
      orderDetails.error = "Payment Transaction Failed. Please Try Again";

      setOrderDetails("orderDetails", orderDetails);
      setTimeout(() => {
        Router.push("/error");
      }, 0);
    }
  }
};
