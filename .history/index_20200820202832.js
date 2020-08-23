const express = require('express');
const app = express();
const routes = require("./routes/routes")
require("dotenv").config();
app.use('/',routes)
app.listen(8080, () => console.log('Gator app listening on port 3000!'));