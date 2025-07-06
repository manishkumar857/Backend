const express = require("express");
const app = express();

console.dir(app); //app is a object

let port =3000;

app.listen(port, ()=>{
    console.log('app is listening on port')
}) //ctrl + c is used to stop listening