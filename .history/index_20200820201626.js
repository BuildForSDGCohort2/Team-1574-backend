// const express = require('express');

// const app = express();

// app.get("/", (request, response) => {
//     response.json({ message: "Hey! This is your server response!" });
//   });

// app.listen(3000, function(){
//     console.log(1)
// })

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})