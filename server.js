const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const morgan=require('morgan');
const cors=require('cors');
const connectDB = require('./config/db');

// dot config
dotenv.config()

//mongo connection
connectDB()

// REST obj
const app=express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use("/api/v1/test",require("./routes/testRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Lifestream app</h1>");
});




//port
const PORT=process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Node server is Running on port ${process.env.PORT}`.bgBlue.white);
});