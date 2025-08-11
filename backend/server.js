import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errrorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 8000;
connectDB()

const app = express();

app.use(cookieParser())
app.use(express.json()) // To be able to parse json
app.get("/",(req, res)=>res.send('Server is ready'));
app.use("/api/users", userRoutes);

// add the middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, ()=>console.log(`Server is runnig on port: ${port}`));

