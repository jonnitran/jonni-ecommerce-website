
//Load All Modules 
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var cors = require("cors");

//Database URL Details 
var url = "mongodb://localhost:27017/mydb";

const config = require('./DB');
const userRoute = require('./router/UserRoute');

const port = process.env.PORT || 5000;

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.DB).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
  );

//creating reference of express 
var app = express();

let corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//Middlware mdoules setup 
app.use(bodyParser.json()); //converting json req data. post method  
app.use(bodyParser.urlencoded({extended:true}));   //Enable post, put and delete body data 
app.use(cors()); //Enable CORS Features

//Database Connection with avoid warning properties 
//mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true});

//Connect to database 
mongoose.connection;

//Coding .....
var Product = require("./router/product.router.js");

//Middleware 
app.use("/product",Product);        //http://localhost:9090/product
app.use(cors(corsOptions))
app.use('/api/users', userRoute);
require('./router/company.router.js')(app);

//app.use("/customer",Customer);

app.listen(port,()=>console.log(`Server is running on port ${port}`));
