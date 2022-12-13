import {Schema,model} from 'mongoose'

interface IBook {
    title: string
    description: string
    author: object
    keyWord: object[]
}

export const keywordsSchema = new Schema({
    keyword: String
})

const bookSchema = new Schema<IBook> ({
    title: String,
    description: String,
    author: String,
    keyWord: [keywordsSchema]
})

export const Book = model<IBook>('Book', bookSchema)

