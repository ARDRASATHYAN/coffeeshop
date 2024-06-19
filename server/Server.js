const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const categoryRouter = require('./src/routers/categoryRouter');
const imageRouter = require('./src/routers/imageRouter');
const productRouter = require('./src/routers/productRouter');
const registerRouter = require('./src/routers/registerRouter');
const loginRouter = require('./src/routers/loginRouter');
const cartRouter = require('./src/routers/cartRouter');
const searchRouter = require('./src/routers/searchRouter');
const orderRouter = require('./src/routers/orderRouter');
const userRouter = require('./src/routers/userRouter');


const app = express();

// CORS middleware configuration
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use('/category',categoryRouter);
app.use('/image',imageRouter);
app.use('/product',productRouter);
app.use('/register',registerRouter);
app.use('/login',loginRouter)
app.use('/cart',cartRouter)
app.use('/search',searchRouter)
app.use('/order',orderRouter)
app.use('/user',userRouter)

const mongoDBurl = "mongodb+srv://sardra9988:273727@coffee.xrwmmuj.mongodb.net/";

mongoose.connect(mongoDBurl)
    .then(() => {
        app.listen(4000, () => {
            console.log("Server started at http://localhost:4000");
        });
    })
    .catch((error) => {
        console.log("Error connecting to MongoDB:", error);
    });


