const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post("/send-email", async (req, res) => {
  const { to, subject, text, html } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "montassar121@gmail.com", // Replace with your Gmail email address
      pass: "mjwq ohxd zcov zyls", // Replace with your Gmail password
    },
  });

  const mailOptions = {
    from: "montassar121@gmail.com", // Replace with your Gmail email address
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


