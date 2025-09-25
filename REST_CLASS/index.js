const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    { username : "Manish",
      content  : "Hardwork is the key to success "
    },
    { username : "Manisha",
      content  : "I Love Coding ! "
    },
    { username : "Anju",
      content  : "Keep Working Hard ! "
    },
    { username : "Sourav",
      content  : "Be consistent ."
    },
    
]


app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
  res.render("new.ejs")
});

app.post("/posts",(req,res)=>{
  
  let {username,content}=req.body;
  posts.push({username,content});
  res.send("post request working");
})

app.listen(port,()=>{
    console.log("Listening to port :8080");
})