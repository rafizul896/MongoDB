import { Server } from 'http';
import app from './app';
const port = 5000;
let server: Server;

async function bootstrap() {
    server = app.listen(port, () => {
        console.log(`This server is running on port : ${port}`)
    })
};

bootstrap();