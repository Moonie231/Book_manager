import {Router} from "express";
import multer from 'multer';
import  {Book,keywordsSchema} from "../schemas/book.model";
import {Author} from "../schemas/author.model";


const bookRouter = Router();
const upload = multer()

bookRouter.get('/create', (req : any, res : any) => {
    res.render('createBook');
})

bookRouter.post('/create', async (req : any, res : any) => {
    try {
        // const authorNew = new Author({
        //     name: req.body.author
        // })

        const bookNew = new Book({
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
        })
        bookNew.keyWord.push({keyword: req.body.keyword})
        const book = await bookNew.save();
        // console.log(book)
        if (book) {
            res.redirect('/book/list')
        } else {
            res.render('error')
        }
    } catch (err) {
        res.render('error')
    }
})

bookRouter.post('/update', upload.none(), async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.body.id})
        book.title = req.body.title;
        book.description = req.body.description;
        book.author = req.body.author;

        await book.save();
        if (book) {
            res.render('success')
        } else {
            res.render('error')
        }
    } catch (err) {
        res.render('error')
    }
})

bookRouter.get('/list', async (req, res) => {
    try {
        const books = await Book.find()
        console.log(books)
        res.render('listBook', {books: books})
    }catch {
        res.render('error')
    }
})

bookRouter.get('/update/:id', async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id})
        console.log(book, 'book')
        if (book) {
            res.render('updateBook', {book: book})
        } else {
            res.render('error')
        }
    } catch (err) {
        res.render('error')
    }
})

bookRouter.delete('/delete/:id', async (req, res) => {
    try {
        const book = await Book.findOne({_id: req.params.id})
        if (book) {
            await book.remove()
            res.status(200).json({message: 'success'})
        }else {
            res.render('error')
        }
    } catch (err) {
        res.render('error')
    }
})

export default bookRouter;