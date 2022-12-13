import {Schema,model} from 'mongoose'

interface IBook {
    title: string
    description: string
    author: object
    keyWord: object[]
}

const keywordsSchema = new Schema({
    keyword: String
})

const bookSchema = new Schema<IBook> ({
    title: String,
    description: String,
    author: {type: Schema.Types.ObjectId, ref:"Author"},
    keyWord: [keywordsSchema],
})

const Book = model<IBook>('Book', bookSchema)

export { Book };

