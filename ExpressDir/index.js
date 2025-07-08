const express = require("express");
const app = express();

// console.dir(app); //app is a object

let port =3000;

app.listen(port, ()=>{
    console.log('app is listening on port')
}) //ctrl + c is used to stop listening


// app.get("/",(req,res)=>{
//     res.send("you contacted home page");
// })
// app.get("/help",(req,res)=>{
//     res.send("you contacted help page");
// })
// app.get("/about",(req,res)=>{
//     res.send("you contacted about page");
// })

// app.get("*",(req,res)=>{
//     res.send("this page doesn't exist");
// })

// app.post("/",(req,res)=>{
//     res.send("post request recieved");
// })


// app.use((req,res)=>{
//     // console.dir(req) //req in the form of object so that js understand it (converted from simple text)
//     console.log("request recieved");

//     res.send("this is a basic response");
// })

app.get("/:username/:id",(req,res)=>{
    let{username,id}=req.params;
    res.send(`welcome to page of @${username}.`);
});