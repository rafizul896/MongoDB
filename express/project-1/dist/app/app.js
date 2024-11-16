"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
// router
const userRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send({
        success: true,
        message: 'User is created successfully'
    });
});
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Project One basic server is running..!');
});
app.post('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(names);
        console.log(req.body);
        res.send('Get Data');
    }
    catch (err) {
        next(err);
    }
}));
// route error handelar
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    });
});
// global error handelar
app.use((err, req, res, next) => {
    if (err) {
        console.log('From Error Route');
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});
exports.default = app;
