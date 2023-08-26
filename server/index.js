const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const {connectDB} = require("./configs/dbConnect.js");

dotenv.config();

const domainConfig = require('./configs/domain.js');
const userRoutes = require('./routes/user.js');
const taskRoutes = require('./routes/task.js');

const PORT = domainConfig.port || 8080;
const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
const app = express ();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/user', userRoutes);
app.use(cookieParser());
app.use('/task', taskRoutes);

app.get('/', (req, res)=>res.status(200).json({messsage: "hello world"}))
connectDB(process.env.CONNECTION_STRING)
app.listen(PORT, ()=>{
    console.log("Your Server listening on port: ",PORT);
})
