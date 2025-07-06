const express = require("express");
const app = express();

console.dir(app); //app is a object

let port =3000;

app.listen(port, ()=>{
    console.log('app is listening on port')
}) //ctrl + c is used to stop listening

app.use((req,res)=>{
    // console.dir(req) //req in the form of object so that js understand it (converted from simple text)
    console.log("request recieved");

    res.send("this is a basic response");
})