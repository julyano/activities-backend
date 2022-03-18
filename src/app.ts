import express from "express";
import { sequelizeConnection } from "../db/config";
import { router } from "./routes";

const connectionTest = (async () => {
    try {
        await sequelizeConnection.authenticate(); 
        console.log('Conexão estabelecida com sucesso.');
    } catch (error) {
        throw new Error(error);
    }
});

const app = express();

app.use(express.json());
app.use(router);

try {
    connectionTest();
} catch (error) {
    throw new Error(error.message);
}

export { app }