import { app } from "./app";
require('dotenv').config();

app.listen(process.env.PORT || process.env.NODE_LOCAL_PORT)