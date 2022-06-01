import axios from "axios";

export default async function handler(req, res) {
  let token = req.body;
  try {
    token = JSON.parse(token);
  } catch (err) {}

  if (token && token != "") {
    try {
      const response = await axios.post(
        `${process.env.PAYPAL_API}/v2/checkout/orders/${token}/capture`,
        {},
        {
          auth: {
            username: process.env.PAYPAL_API_CLIENT,
            password: process.env.PAYPAL_API_SECRET,
          },
        }
      );
      res.status(200).json({ code: 200, data: response.data });
    } catch (error) {
      console.log("Error is ", error);

      return res
        .status(500)
        .json({ code: 500, message: "Internal Server error" });
    }
  }
}
