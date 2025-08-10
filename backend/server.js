import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 8000;

const app = express();

app.get("/",(req, res)=>res.send('Server is ready'));
app.use("/api/users", userRoutes);

app.listen(port, ()=>console.log(`Server is runnig on port: ${port}`));

