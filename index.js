//acquiring basic files and modules
const express=require('express');
const app=express();
const port=8000;
//const mongoose=require('./config/mongoose');

//middlewares
app.use(express.urlencoded()); 


//setting up static files
app.use(express.static('./assets'));


//setting up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');


//routing all url to routes 
app.use('/',require('./routes'));


//connecting to server
app.listen(port,(err)=>{
    if(err){console.log('error in connecting to the server'); return;}
    console.log('Server is up and running on port '+port);
})