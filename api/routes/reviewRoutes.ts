import { Router } from "express";
import { validateRating } from "../model/validators";
import { allReviews, createReview, filterReviews, getReview, likeReview, modifyReview, removeReview } from "../controllers/reviewController";

const router = Router();

router.post("/movies/postReview", validateRating, createReview);

router.get("/movies/reviews", allReviews);

router.get("/movies/reviews/:id", getReview);

router.put("/movies/reviews/:id", validateRating, modifyReview);

router.delete("/movies/reviews/:id", removeReview);

router.patch("/movies/reviews/:id/:interaction", likeReview);

router.get("/movies/review/:rating", filterReviews)

export default router;