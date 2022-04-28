const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(express.json());
app.use(cors({
    origin: process.env.ORIGIN
}))

require('./LOGIN/login')(app);
require('./PUBLIC/public')(app);
require('./PRIVATE/private')(app);

app.listen(process.env.PORT);


