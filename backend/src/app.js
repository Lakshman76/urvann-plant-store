const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const plantRoutes = require("./routes/plantRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/plants", plantRoutes);
app.use("/api/auth", authRoutes);

module.exports = app;
