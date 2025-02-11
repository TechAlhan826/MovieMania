# **MovieMania – Your Perfect Destiny for Exploring Movies**  

Welcome to **MovieMania**, a dynamic movie exploration platform where users can browse, review, and engage with movies effortlessly. This repository contains the **backend API** for MovieMania, built using **TypeScript, Express, Prisma, and MongoDB**.  

The **frontend** for this app is currently under development.  

---

## **🌟 Features**
✔ User Authentication (Register, Login, Logout) – **Passport.js & JWT**  
✔ Movie Reviews (CRUD) – **Prisma + MongoDB**  
✔ Pagination & Filtering for efficient browsing  
✔ Like/Dislike system for reviews  
✔ Secure API with **input validation & error handling**  

---

## **🚀 Live Deployment**
👉 **Backend API**: [Your Deployed API URL]  
👉 **API Documentation**: [Swagger Docs URL]  

OR  

Follow the steps below to **run locally**.  

---

## **🛠️ Tech Stack**
- **Backend**: TypeScript, Express.js, Prisma  
- **Database**: MongoDB (via Prisma ORM)  
- **Auth**: Passport.js (Local Strategy) + JWT  
- **API Docs**: Swagger  

---

## **🔧 Local Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/your-repo/moviemania-backend.git
cd moviemania-backend
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Configure Environment Variables**
Create a `.env` file in the root folder and set the following:
```env
DATABASE_URL="mongodb+srv://your-mongo-url"
TOKEN_SECRET="your-jwt-secret"
SESSION_SECRET="your-session-secret"
```

### **4️⃣ Prisma Setup (For MongoDB)**
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### **5️⃣ Start the Server**
```bash
npm run dev
```
The server should now be running at **http://localhost:3000**  

---

## **🛠 API Endpoints**
### **🔑 Authentication**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login and get JWT token |
| POST   | `/api/auth/logout`   | Logout and destroy session |
| GET    | `/api/auth/authStatus` | Check user authentication |

### **🎬 Movies**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/movies`   | Get all movies |
| GET    | `/api/movies/:id` | Get movie details |
| POST   | `/api/movies`   | Add a new movie (Admin) |
| PUT    | `/api/movies/:id` | Update movie info (Admin) |
| DELETE | `/api/movies/:id` | Remove a movie (Admin) |

### **⭐ Reviews**
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | `/api/reviews`   | Fetch all reviews |
| GET    | `/api/reviews/:id` | Get a specific review |
| POST   | `/api/reviews`   | Add a review (Requires Auth) |
| PATCH  | `/api/reviews/:id/like` | Like a review |
| DELETE | `/api/reviews/:id` | Delete review (Owner only) |

For a complete list, check **Swagger Docs**: [Swagger Docs URL]  

---

## **📌 Deployment (Vercel/Render)**
To deploy on **Vercel**, run:
```bash
vercel
```
Or for **Render**, push your code to GitHub and connect it via **Render Dashboard**.

---

## **🛡 Security & Best Practices**
- **Validation**: Input validated via `Zod`  
- **Error Handling**: Prisma errors are sanitized to avoid exposing database details  
- **Auth**: JWT stored in **HTTP-only cookies** for security  
- **Rate Limiting**: Prevents brute-force attacks  

---

## **📜 License**
This project is licensed under **MIT License**.

---

🎬 **Enjoy exploring movies with MovieMania!** 🚀  
