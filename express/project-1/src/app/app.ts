import express, { NextFunction, Request, Response } from 'express';
const app = express();

// parsers
app.use(express.json());

// middleware
const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url, req.method);
    next();
};

app.get('/', logger, (req: Request, res: Response) => {
    res.send('Project One basic server is running..!');
});

app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.send('Get Data');
});

export default app;