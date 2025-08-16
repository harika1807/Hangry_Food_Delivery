// Step 1: Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Step 2: Import dependencies
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // Step 4 handles DB
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// Step 3: App config
const app = express();
const port = process.env.PORT || 4000;

// Step 4: Middleware
app.use(express.json());
app.use(cors());

// Step 5: Database connection
connectDB();

// Step 6: API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Step 7: Test route
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// Step 8: Start server
app.listen(port, () => {
  console.log(`🚀 Server started on http://localhost:${port}`);
});
