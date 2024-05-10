
const dotenv = require("dotenv").config(); 
const express = require("express") ; 
const app = express() ; 
const cors = require("cors") ; 
const connectDB = require("./database/connection") ; 
const PORT = 6000 ; 


app.use(cors({
    origin: "http://localhost:6000/",
    methods:"GET, POST, PUT, DELETE",
    credentials: true
})) ; 

app.use(express.json()) ; 

connectDB() ; 

app.get("/", (req, res)=>{
    res.status(200).json("Server start")
}) ; 

app.listen(PORT, ()=>{
    console.log(`Server start at port ${PORT}`)
})