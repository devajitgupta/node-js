const express = require('express');
const app = express();
const path = require('path')
app.get("/",function(req,res){

});

const port = process.env.PORT || 3020;

app.listen(port, function(req,res){
	console.log("hello world program running" , port);
});