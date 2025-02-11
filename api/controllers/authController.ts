import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { PrismaClient } from "prisma/prisma-client";

const prisma = new PrismaClient();

export const signIn = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: "Invalid Email or User Does Not Exist!" });
    }

    const verifyPass = await bcryptjs.compare(password, user.password);
    if (!verifyPass) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    const tokenData = { id: user.id, username: user.username, email: user.email };
    const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true });
    return res.status(200).json({ message: "Login Successful!", success: true });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const signUp = async (req: any, res: any) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await prisma.users.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists!" });
    }

    const salt = await bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hashSync(password, salt);

    const newUser = await prisma.users.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ message: "User created successfully!" });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};

export const logOut = async (req: any, res: any) => {
  try {
    res.cookie("token", "", { httpOnly: true });
    return res.status(200).json({ message: "Logout Successful", success: true });
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
