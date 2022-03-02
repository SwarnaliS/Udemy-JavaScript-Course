const express = require("express");
const bodyParser =  require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var newItems= ["Buy Food", "Cook Food"];
var workItems=[];
app.get("/", function(req, res){

    var DAY= date.getDate();
    res.render('list', {listTitle: DAY , addedItems: newItems});
})

app.post("/", function(req,res){
    if(req.body.list === "work"){
        workItem=req.body.toDo;
        workItems.push(workItem);
        res.redirect("/work");
    }else{
        newItem= req.body.toDo;
        newItems.push(newItem);
        res.redirect("/");
    }

})

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work Items", addedItems: workItems});
})






app.listen(3000, function(req, res){
    console.log("The server is running on port 3000.");
})