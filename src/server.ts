import { app } from "./app";
require('dotenv').config();

app.listen(process.env.NODE_LOCAL_PORT || 3333)