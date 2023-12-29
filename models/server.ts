import express, { Express } from 'express';
import cors from 'cors';

export class Server {
    app: Express;

    port: string | number | undefined

    constructor(){
        this.app = express();
        this.port = process.env.PORT
        this.middlewares();
    }

    middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(): void {
        this.app.listen(this.port, ()=>{
            console.log(`Corriendo en el puerto ${this.port}`)
        })
    }
}