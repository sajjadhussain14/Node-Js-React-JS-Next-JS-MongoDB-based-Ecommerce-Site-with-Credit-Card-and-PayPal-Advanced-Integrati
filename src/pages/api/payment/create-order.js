import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: "105.70",
            },
          },
        ],
        application_context: {
          brand_name: process.env.COMPANY,
          landing_page: "NO_PREFERENCE",
          user_action: "PAY_NOW",
          return_url: `${process.env.HOST}/capture-order`,
          cancel_url: `${process.env.HOST}/cancel-payment`,
        },
      };

      // format the body
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");

      // Generate an access token
      const {
        data: { access_token },
      } = await axios.post(
        `${process.env.PAYPAL_API}/v1/oauth2/token`,
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          auth: {
            username: PAYPAL_API_CLIENT,
            password: PAYPAL_API_SECRET,
          },
        }
      );

      console.log(access_token);

      // make a request
      const response = await axios.post(
        `${PAYPAL_API}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      console.log(response.data);

      return res.json(response.data);
    } catch (error) {
      console.log(error.message);
      return res.status(500).json("Something goes wrong");
    }
  } else {
    res.json("");
  }
}
