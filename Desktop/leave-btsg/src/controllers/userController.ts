import { Request, Response } from "express";
import { UserModel } from "../models/user";

const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};
const getUser = async (req: Request, res: Response) => {
  try{
    const {id} = req.params;
    const user = await UserModel.findById({_id: id})
    res.send(user);
  } catch(error){
    res.status(400).json({errorMessage:"error happened"})
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const { name, phoneNumber, firstName, lastName, email, school, workPlace } =
      req.body;
    const user = await UserModel.create({
      name,
      phoneNumber,
      firstName,
      lastName,
      email,
      school,
      workPlace,
    });
    res.send(user); // Make sure to send the response after the user is created
  } catch (error) {
    res.status(400).json({ errorMessage: "An error occurred" });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, workPlace, school } = req.body;
    const { id } = req.params;
    const user = await UserModel.findByIdAndUpdate(id, {
      name,
      workPlace,
      school,
    });
    res.send(user);
  } catch (error) {
    res.status(400).json({ errorMessage: "error happened" });
  }
};

export { getUsers, updateUser, createUser , getUser};
