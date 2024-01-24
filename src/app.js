import express, { json } from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
//import cloudConfig from "./cloudinary/cloudinary.js";
import authRoutes from "./routes/auth.routes.js";
import uploadRoutes from "./routes/upload.routes.js";
import explorerRoutes from "./routes/explorer.routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", uploadRoutes);
app.use("/api", explorerRoutes);

export default app;