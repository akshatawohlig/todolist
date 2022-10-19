const express=require('express');
const app=express();
const path=require('path');
const port=2000;
const hbs=require('hbs');
const staticPath=path.join(__dirname,'../src');
const partialPath=path.join(__dirname,'../partials')
hbs.registerPartials(partialPath)
//to set the view
app.set("view engine","hbs");
app.get('',(req,res)=>{
    res.render("index")
});
//middleware body parser 
//the work of the body parser to encode the url and get the data
let bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//urlencode will basically read the data from the url
app.post("",(req, res) => {
    const fs=require('fs')
    const myjson=JSON.stringify(req.body)
    let pre=fs.readFileSync('input.json',"utf-8")
    pre=pre.slice(0,-1);
    console.log(pre)
    pre=pre+','+myjson+']'
    console.log(pre)
    fs.writeFileSync("input.json",pre)
    console.log(myjson)
    res.send(pre)
    

})

app.listen(port,()=>{
    console.log(`listen to  the port number ${port}`)
})






