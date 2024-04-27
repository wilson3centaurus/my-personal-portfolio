const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port 3000


// Configure email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.your-email-provider.com", // Replace with your SMTP server host
  port: 587, // Replace with your SMTP server port
  secure: false, // Set to true if using TLS
  auth: {
    user: "tafadzwawilsonsedze@gmail.com", // Replace with your email address
    pass: "Wilsoncentaurus2003$", // Replace with your email password
  },
});

// Handle form submission
app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
      from: email,
      to: "tafadzwawilsonsedze@gmail.com", // Replace with recipient email
      subject,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email!" });
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
