import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const userSchema = z.object({
    email: z.string().min(1, {message:"Email must not be empty"}).email("Invalid email entered"),
    username: z.string().optional()
});

const ratingSchema = z.object({
  review: z.string().min(1, {message:"Review must not be empty"}),
  rating: z.number().min(1).max(10, {message:"Ratings must be between 1-10"}),
  like: z.number().optional(),
  movieId: z.string().min(1, {message:"Movie Id must not be empty"}),
  userId: z.string().min(1, {message:"User Name must not be empty"}),
});

export const validateUser = (req:any, res:any, next:any) =>{
    const parsedUser = userSchema.safeParse(req.body);
    if(!parsedUser.success){
        return res.status(400).json({error:parsedUser.error.errors});
    }
    next();
}

export const validateRating = (req:any, res:any, next:any) =>{
    const parsedRating = ratingSchema.safeParse(req.body);
    if(!parsedRating.success){
        return res.status(400).json({error:parsedRating.error.errors});
    }
    next();
}

