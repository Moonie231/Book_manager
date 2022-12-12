import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import bookRouter from "./src/router/book.router";

const app = express();
app.set('view engine', 'ejs')
app.set('views', './src/views')
mongoose.set('strictQuery', true);
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/book', bookRouter)

const db = 'mongodb+srv://moonie:Tr%40ng2301@moonie.yxbxu8l.mongodb.net/demo'

mongoose.connect(db).then(() => console.log('db connected'))
.catch(err => console.log('db connection error: ' + err.message))



app.listen(3000, () => {
    console.log('listening on port 3000')
})

