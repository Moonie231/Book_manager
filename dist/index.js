"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_router_1 = __importDefault(require("./src/router/book.router"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
mongoose_1.default.set('strictQuery', true);
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/book', book_router_1.default);
const db = 'mongodb+srv://moonie:Tr%40ng2301@moonie.yxbxu8l.mongodb.net/demo';
mongoose_1.default.connect(db).then(() => console.log('db connected'))
    .catch(err => console.log('db connection error: ' + err.message));
app.listen(3000, () => {
    console.log('listening on port 3000');
});
//# sourceMappingURL=index.js.map