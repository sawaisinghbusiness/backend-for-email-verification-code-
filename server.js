import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import {
  getVerifyEmailTemplate,
  getResetPasswordTemplate
} from "./emailTemplate.js";

dotenv.config();

console.log("BREVO_USER:", process.env.BREVO_USER);
console.log("BREVO_PASS:", process.env.BREVO_PASS);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const otpStore = {};

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
  auth: {
    user: decodeURIComponent(process.env.BREVO_USER),
    pass: process.env.BREVO_PASS,
  },
});

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOTPEmail(email, otp, type) {
  let html;

  if (type === "signup") {
    html = getVerifyEmailTemplate(otp);
  } else if (type === "reset") {
    html = getResetPasswordTemplate(otp);
  }

  const info = await transporter.sendMail({
    from: "GETXH <agency@getxh.in>",
    to: email,
    subject: type === "signup"
      ? "Verify your email"
      : "Reset your password",
    html
  });

  console.log("MAIL SENT:", info);
}

async function handleSendOtp(req, res) {
  const { email, type } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  try {
    const otp = generateOTP();
    otpStore[email] = { otp, type };

    await sendOTPEmail(email, otp, type);

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("🔥 FULL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP",
      error: error.message
    });
  }
}

app.post('/send-otp', handleSendOtp);

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: 'Email and OTP are required' });
  }

  const stored = otpStore[email];

  if (!stored || stored.otp !== otp) {
    return res.status(400).json({ success: false, message: "Invalid OTP" });
  }

  delete otpStore[email];

  return res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
