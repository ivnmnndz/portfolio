const Mailgun = require("mailgun.js");
const formData = require("form-data");

export default async function handler(req, res) {
  console.log("mg api key", process.env.MAILGUN_API_KEY);
  console.log("body: ", req.body);
  const mailgun = new Mailgun(formData);
  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY,
  });
  await mg.messages
    .create("sandbox510239168cb445588c02607a3cb0d064.mailgun.org", {
      from: req.body.email,
      to: [process.env.EMAIL],
      subject: `Contact Request from ${req.body.name}`,
      text: req.body.message,
    })
    .then((msg) => {
      console.log("response data", msg);
      // logs mailgun response data
      res.status(200).json({ ok: "cool" });
      // respond to request
    })
    .catch((err) => {
      console.log("error", err);
      res.status(500).json({ ok: "uncool" });
    }); // logs any error;
}
