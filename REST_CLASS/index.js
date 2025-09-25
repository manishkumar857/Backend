const express = require("express");
const app = express();
const port = 8080;

const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    { id:"1a",
      username : "Manish",
      content  : "Hardwork is the key to success "
    },
    { id:"2b",
      username : "Manisha",
      content  : "I Love Coding ! "
    },
    { id:"3c",
      username : "Anju",
      content  : "Keep Working Hard ! "
    },
    { id:"4d",
      username : "Sourav",
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
  res.redirect("/posts");
})
app.get("/posts/:id",(req,res)=>{
  let {id} = req.params;
  let post = posts.find((p)=>id === p.id);
  res.render("show.ejs",{post});
})
app.listen(port,()=>{
    console.log("Listening to port :8080");
})