const express = require("express");
const app = express();
const Date = require("./Date")
app.use(express.json());
app.use("/",(req,res)=>{
     res.status(200).send(Date);
});

app.listen(3000);

