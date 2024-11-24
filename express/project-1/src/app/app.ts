import express, { NextFunction, Request, Response, Router } from 'express';
const app = express();

// parsers
app.use(express.json());

// router
const userRouter = express.Router();
app.use('/api/v1/users', userRouter);

userRouter.get(
    '/create-user',
    (req: Request, res: Response) => {
        const user = req.body;
        console.log(user);
        res.send({
            success: true,
            message: 'User is created successfully'
        })
    })

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method);
    next();
};

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Project One basic server is running..!');
});

app.post('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        res.send('Get Data');
    } catch (err) {
        next(err);
    }
});

// route error handelar
app.all("*",(req:Request,res:Response)=> {
    res.status(400).json({
        success: false,
        message: 'Route is not found'
    })
})

// global error handelar
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        console.log('From Error Route');
        console.log(err);
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
})

export default app;