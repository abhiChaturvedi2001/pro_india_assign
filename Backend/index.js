import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { connectDb } from "./DB/db.js";
import userRoutes from "./Routes/userRoutes.js"
import productRoutes from "./Routes/productRoutes.js"
dotenv.config();


const app = express();
const options = {
    origin: "http://localhost:5173",
    credentials: true
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors(options));
app.use(cookieParser());
app.use("/v1/auth", userRoutes);
app.use("/v1/products", productRoutes)


app.listen(process.env.PORT, () => {
    console.log("Server listen on port", process.env.PORT);
    connectDb();
})