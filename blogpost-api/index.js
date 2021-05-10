const express =  require('express');

const app = express();

app.use(express.json());
// db connection
require('./config/db');

// use userRouter
const userRouter = require('./route/userRouter');
app.use('/', userRouter);
app.get('/', (req, res)=>{
    res.status(200).send('Hello world');
})
const port = process.env.PORT | 5000;

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
})