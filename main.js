const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}))

require('./LOGIN/login')(app);
require('./PUBLIC/public')(app);
require('./PRIVATE/private')(app);

app.listen(3000);


