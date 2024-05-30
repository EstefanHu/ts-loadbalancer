"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const users_routes_1 = require("./users/users.routes");
const products_routes_1 = require("./products/products.routes");
if (!process.env.port) {
    console.log('No port value specified...');
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/', users_routes_1.userRouter);
app.use('/', products_routes_1.productRouter);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
