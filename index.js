const express = require('express');
const app = express();
app.get("/",function(req,res){

});

const port = process.env.PORT || 3000

app.listen(port, function(req,res){
	console.log("hello world program running");
});