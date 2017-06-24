const express=require("express");
const path=require("path");
const bodyParser=require("body-parser");
const cors=require("cors");
const passport=require("passport");
const mongoose=require("mongoose");
const config=require('./config/database');

mongoose.connect(config.database);
mongoose.connection.on('connected',()=>{
  console.log("connected to database "+config.database);
});
mongoose.connection.on('error',()=>{
  console.log("database error "+error);
});

const app=express();

//user routes
const users=require('./routes/users');

//server port
const port=3000;
//cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//body parser middleware
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);

//Index route
app.get('/',(req,res)=>{
  res.send("Invalid endpoint");
});

//start server
app.listen(port,()=>{
  console.log("server started on port "+port);
});
