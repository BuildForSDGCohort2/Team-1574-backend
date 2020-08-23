const express = require('express');
const bodyParser = require('body-parser');

const formidableMiddleware = require('express-formidable');

const routes = require("./routes/routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(formidableMiddleware());

require("./plugins/cloudinary")



app.use('/',routes)


app.listen(8080, () => console.log('Gator app listening on port 8080!'));