 const express = require("express");
 const cors = require("cors");

 const connectDB = require("./Mongodb")
 const todoRoute = require("./routes/TodoRoutes")

const app = express();

    // middleware
app.use(express.json())
app.use(cors());

connectDB();

app.use("/api", todoRoute)

app.listen(8000, ()=>{
    console.log("server is runing");
})
