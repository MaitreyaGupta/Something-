var app1=require("express")
app=app1() 
var bodyParser=require("body-parser")
app.set("view engine","ejs")
app.use(app1.static("public"))
app.use(bodyParser.urlencoded({extended:false}))
app.listen(3000,function(req,res){
    console.log("here now")
})
app.get("/",function(req,res){
    res.render("Home")
})
app.post("/Poems",function(req,res){
    res.redirect("/views/Poems")
})

app.get("/views/Poems",function(req,res){
    res.render("Poems")
})
app.get("/views/Stories",function(req,res){
    res.render("Stories")
})
app.post("/views/Poem1",function(req,res){
     res.redirect("/views/Poem1")
})
app.get("/views/Poem1",function(req,res){
    res.render("Poem1")
})
app.post("/views/Poem2",function(req,res){
    res.redirect("/views/Poem2")
})
app.get("/views/Poem2",function(req,res){
   res.render("Poem2")
})
app.post("/views/Poem3",function(req,res){
    res.redirect("/views/Poem3")
})
app.get("/views/Poem3",function(req,res){
   res.render("Poem3")
})
app.post("/views/Poem4",function(req,res){
    res.redirect("/views/Poem4")
})
app.get("/views/Poem4",function(req,res){
   res.render("Poem4")
})