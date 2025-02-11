import { interactReview, deleteReview, fetchReview, fetchReviews, postReview, updateReview, filterReview } from "../model/models";

export const createReview =  async (req:any, res:any)=>{
    try {
        const review = await postReview(req.body);
        res.status(200).json(review);
    } catch (error) {
        return res.status(500).json({ error:"Error While Posting Review", message:error});
    }
};

export const allReviews =  async (req:any, res:any)=>{
    try {
        const reviews = await fetchReviews();
        res.status(200).json(reviews);
    } catch (error) {
        return res.status(500).json({ error:"Error While Fetching Reviews", message:error});
    }
};

export const getReview =  async (req:any, res:any)=>{
    try {
        const reviewId = req.params.id;
        const review = await fetchReview(reviewId);
        res.status(200).json(review);
    } catch (error) {
        return res.status(500).json({ error:"Error While Fetching Review", message:error});
    }
};

export const modifyReview =  async (req:any, res:any)=>{
    try {
        const reviewId = req.params.id;
        const modifiedReview = await updateReview(reviewId, req.body)
        res.status(200).json(modifiedReview);
    } catch (error) {
        return res.status(500).json({ error:"Error While Updating Review", message:error});
    }
};

export const removeReview =  async (req:any, res:any)=>{
    try {
        const reviewId = req.params.id;
        const removedReview = await deleteReview(reviewId)
        res.status(200).json(removedReview);
    } catch (error) {
        return res.status(500).json({ error:"Error While Removing Review", message:error});
    }
};

export const likeReview =  async (req:any, res:any)=>{
    try {
        const reviewId = req.params.id;
        const interactType = req.params.interaction;
        const interactedReview = await interactReview(reviewId, interactType);
        res.status(200).json(interactedReview);
    } catch (error) {
        return res.status(500).json({ error:"Error While Liking Review", message:error});
    }
};

export const filterReviews =  async (req:any, res:any)=>{
    try {
        const rating = req.params.rating;
        const filteredReviews = await filterReview(rating);
        res.status(200).json(filteredReviews);
    } catch (error) {
        return res.status(500).json({ error:"No reviews matched with the specified rating", message:error});
    }
};