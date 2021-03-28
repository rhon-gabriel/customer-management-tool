const express = require("express");
const app = express();

app.use(express.json());
app.use(allowCorsMiddleware);

/* API */
app.get("/customer/:id", getCustomer);
app.listen(3001, () => console.log("app listening on port 3001."));

let customers = [
  {
    id: "12345678910",
    attributes: {
      first_name: "Anna",
      last_name: "Anne",
      person_number: "19901230-4567",
      email: "annaanne@qliro.com",
      phone_number: "+46721234567",
      address: "Qlirovägen 123",
      postcode: 12345,
      city: "Stockholm, Sweden",
      orders: [
        {
          key: 1,
          order_type: "Online",
          flagged: false,
          order_number: "1234567890",
          created_at: "2021-05-05T11:33:11+01:00",
          country: "Uk",
          store: "Butik X",
          payment_method: "Qliro",
          payment_details: "Invoice",
          payment_status: "Paid",
          amount: 2160,
        },
        {
          key: 2,
          order_type: "Instore",
          flagged: false,
          order_number: "1234567890",
          created_at: "2021-05-16T11:33:11+01:00",
          country: "Se",
          store: "Butik X",
          payment_method: "Visa",
          payment_details: "Card, ••••1234",
          payment_status: "In progress",
          amount: 3890,
        },
        {
          key: 3,
          order_type: "Manual",
          flagged: false,
          order_number: "1234567890",
          created_at: "2021-05-20T11:33:11+01:00",
          country: "No",
          store: "Butik X",
          payment_method: "American Express",
          payment_details: "Card, ••••1234",
          payment_status: "Failed",
          amount: 1134,
        },
        {
          key: 4,
          order_type: "Online",
          flagged: true,
          order_number: "1234567890",
          created_at: "2021-05-24T11:33:11+01:00",
          country: "Se",
          store: "Butik X",
          payment_method: "Paypal",
          payment_details: "Paypal",
          payment_status: "In progress",
          amount: 567,
        },
        {
          key: 5,
          order_type: "Instore",
          flagged: false,
          order_number: "1234567890",
          created_at: "2021-05-30T11:33:11+01:00",
          country: "No",
          store: "Butik X",
          payment_method: "Trustly",
          payment_details: "Trustly",
          payment_status: "Paid",
          amount: 8970,
        },
        {
          key: 6,
          order_type: "Instore",
          flagged: true,
          order_number: "1234567890",
          created_at: "2021-05-30T11:33:11+01:00",
          country: "Se",
          store: "Butik X",
          payment_method: "Qliro",
          payment_details: "Qliro",
          payment_status: "Paid",
          amount: 8070,
        },
      ],
    },
  },
];

function getCustomer(req, res) {
  const id = req.params.id;
  const customer = customers.find((p) => p.id == id);
  return customer
    ? res.status(200).json(customer).end()
    : res.status(404).end();
}

/* Add CORS-headers to every request */
function allowCorsMiddleware(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
}
