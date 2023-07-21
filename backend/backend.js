var express=require("express");
var mysql=require("mysql");
var cors=require("cors");
var app=express();
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.listen(3002,()=>
{
    console.log("server is created on 3000 port number ");
})
var connection =mysql.createConnection({
host:'localhost',
  user:'root',
  password:"Knc@9177",
  database:"road_transport"
});
connection.connect((err)=>{
if(err)
  console.log("not connected");
else
console.log("connected successfully!!!");

});
