import { app } from "./app";
require('dotenv').config();

app.listen(process.env.DB_LOCAL_PORT || 3333)