import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoutes from "../routes/reviewRoutes";
import startSwagger from "../model/swagger";
//import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
    origin: "*",
    credentials: true,
}

app.use(cors(corsOptions));
//app.use(cookieParser());
app.use(json({ limit: "32mb" }));
app.use(urlencoded({ limit:"32mb", extended:true }));

startSwagger(app);
app.get("/", (req, res)=>{
    res.send("<h1>Welcome To Movie Mania By Alhan Refer /docs To View The Api Docs</h1>")
})
app.use("/", reviewRoutes);


app.listen(PORT, ()=>{
    console.log(`Server Is Running On Port : ${PORT}`);
})