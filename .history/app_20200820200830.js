const express = require('express');

const app = express();
app.get('/',(res,req)=>{
    res.send(1)
})


module.exports = app;