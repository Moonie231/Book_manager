"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.keywordsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.keywordsSchema = new mongoose_1.Schema({
    keyword: String
});
const bookSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    author: String,
    keyWord: [exports.keywordsSchema]
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
//# sourceMappingURL=book.model.js.map