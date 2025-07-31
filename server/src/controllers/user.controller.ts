import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.model";
import { generateToken } from "../utils/generateToken";
import { signinSchema, signupSchema } from "../schemas/auth.schema";

export const signup = async (req: Request, res: Response) => {
  const parsed = signupSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.issues.map((err) => err.message);
    return res.status(400).json({ success: false, error: errors.join(", ") });
  }

  const { username, email, password } = parsed.data;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "User signed up successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error, errorMessage: "Error signed up user" });
  }
};

export const signin = async (req: Request, res: Response) => {
  const parsed = signinSchema.safeParse(req.body);

  if (!parsed.success) {
    const errors = parsed.error.issues.map((err) => err.message);
    return res.status(400).json({ success: false, error: errors.join(", ") });
  }

  const { email, password } = parsed.data;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (!passwordIsMatch) {
      return res
        .status(400)
        .json({ success: false, error: "Invalid credentials" });
    }

    const token = generateToken(user._id.toString());

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
      token: token,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, error, errorMessage: "Error signed in user" });
  }
};
