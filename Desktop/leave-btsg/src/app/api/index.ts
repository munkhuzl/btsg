import express, { Request, Response } from "express";
import { userRouter } from "../../routes/userRoutes";
import { connectDb } from "../lib/db";
import dotenv from 'dotenv';
const cookieParser = require('cookie-parser')
const cors = require('cors')
dotenv.config();
const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());
app.use(cookieParser())

const port = 4000;
connectDb();

app.use(userRouter);


app.listen(port, () => {
  console.log(`Server is runningdd on http://localhost:${port}`);
});
