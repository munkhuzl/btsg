import express from 'express';
import { createUser, getUser, getUsers, updateUser } from "../controllers/userController";

const userRouter=express.Router();

userRouter
    .get("/user/:id", getUser)
    .get("/users", getUsers)
    .post("/users", createUser)
    .put("/users/:id", updateUser)

    export {userRouter};