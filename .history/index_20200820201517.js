const express = require('express');

const app = express();

app.get("/", (request, response) => {
    response.json({ message: "Hey! This is your server response!" });
  });

app.listen(3000, function(){
    console.log(1)
})