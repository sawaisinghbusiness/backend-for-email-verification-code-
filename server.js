import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {
  getVerifyEmailTemplate,
  getResetPasswordTemplate
} from "./emailTemplate.js";

dotenv.config();

// ── MongoDB connect ──────────────────────────────────
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(e => console.error("MongoDB error:", e.message));
}

const userSchema = new mongoose.Schema({
  uid:       { type: String, index: true },
  username:  String,
  email:     { type: String, index: true },
  mobile:    String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const otpStore = {};

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendOTPEmail(email, otp, type) {
  const html = type === "signup"
    ? getVerifyEmailTemplate(otp)
    : getResetPasswordTemplate(otp);

  const subject = type === "signup" ? "Verify your email" : "Reset your password";

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY,
    },
    body: JSON.stringify({
      sender: { name: "GETXH", email: "agency@getxh.in" },
      to: [{ email }],
      subject,
      htmlContent: html,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Brevo API error ${res.status}: ${err}`);
  }

  console.log("MAIL SENT via Brevo API to", email);
}

async function handleSendOtp(req, res) {
  const { email, type } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
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
      error: error.message,
    });
  }
}

app.post("/send-otp", handleSendOtp);

app.post("/save-user", async (req, res) => {
  const { uid, email, username, mobile } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email required" });
  try {
    await User.findOneAndUpdate(
      { email },
      { uid, email, username, mobile },
      { upsert: true, new: true }
    );
    return res.status(200).json({ success: true });
  } catch (e) {
    console.error("save-user error:", e.message);
    return res.status(500).json({ success: false, message: e.message });
  }
});

app.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ success: false, message: "Email and OTP are required" });
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
