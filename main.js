const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors({
    origin: process.env.ORIGIN
}));


require('./LOGIN/login')(app);
require('./PUBLIC/public')(app);
require('./PRIVATE/private')(app);

app.listen(process.env.PORT);


