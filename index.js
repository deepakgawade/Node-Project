const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
})
);

app.get("/",(req, res)=>{
    res.send("Server is up and Running");
});

app.listen(3000,()=>{
    console.log("Connected to server");
})

const routes= require("./Routes/routes");

app.use("/routes",routes);