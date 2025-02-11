import { PrismaClient } from "prisma/prisma-client";
import { ObjectId } from "mongodb";

const prisma = new PrismaClient();

export async function createUser(user:any) {
    try {
        //CREATING SINGLE USER IN USERS TABLE
        const createUser = await prisma.users.create({
            data: user, 
        });
        console.log(createUser);
        return createUser;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}


export async function createUsers(users:any) {
    try {
        //CREATING MULTIPLE USERS IN USERS TABLE
        const createUsers = await prisma.users.createMany({
            data: users, 
        });
        console.log(createUsers);
        return createUsers;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}



export async function fetchUser(Id:any) {
    try {
        //CREATING MULTIPLE USERS IN USERS TABLE
        const fetchUser = await prisma.users.findUnique({
            where:{
                id:Id,
            },
        });
        console.log(fetchUser);
        return fetchUser;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}


export async function fetchUsers() {
    try {
        //READING MULTIPLE USERS DATA IN USERS TABLE
        const showUsers = (user: any)=>{
            console.log(`\n NAME : ${user.email}\nEMAIL ID : ${user.username}`);
        }
        const findUsers = await prisma.users.findMany();
        findUsers.map(showUsers);
        return findUsers;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function createMovies(movie:any) {
    try {
        //CREATING MULTIPLE USERS IN USERS TABLE
        const createMovies = await prisma.users.createMany({
            data: movie, 
        });
        console.log(createMovies);
        return createMovies;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchMovie(Id:any) {
    try {
        const fetchMovie = await prisma.movie.findUnique({
            where:{
                id:Id,
            },
        });
        console.log(fetchMovies);
        return fetchMovie;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchMovies() {
    try {
        const fetchMovies = await prisma.movie.findMany();
        return fetchMovies;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function postReview(review:any) {
    try {
        //CREATING SINGLE USER IN USERS TABLE
        const postReview = await prisma.rating.create({
            data: review, 
        });
        console.log(postReview);
        return postReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchReview(Id:string) {
    try {
        
        const fetchReview = await prisma.rating.findUnique({
            where:{
                id:Id,
            },
        });
        console.log(fetchReview);
        return fetchReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function fetchReviews() {
    try {
        const fetchReviews = await prisma.rating.findMany();
        return fetchReviews;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateReview(Id:any, review:any) {
    try {
        //CREATING MULTIPLE USERS IN USERS TABLE
        const updateReview = await prisma.rating.update({
            where:{
                id:Id,
            },
            data:review,
        });
        console.log(updateReview);
        return updateReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function deleteReview(Id:any) {
    try {
        //CREATING MULTIPLE USERS IN USERS TABLE
        const deleteReview = await prisma.rating.delete({
            where:{
                id:Id,
            },
        });
        console.log(deleteReview);
        return deleteReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function interactReview(Id:any, interaction:any) {
    try {
        const interactType = interaction == "like" ? {like:{increment:1}} : {like:{decrement:1}};
        

        const interactReview = await prisma.rating.update({
            where:{
                id:Id,
            },
            data:interactType,
        });
        console.log(interactReview);
        return interactReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}

export async function filterReview(param: any) {
    try {
        const filterReview = await prisma.rating.findMany({
            where:{
                rating: param,
               }
        });
        return filterReview;
    } catch (error) {
        console.log(error);
        return error;
    } finally {
        await prisma.$disconnect();
    }
}