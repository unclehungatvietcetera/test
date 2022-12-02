const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
});
app.get("/new-world", (req, res) => {
  res.send("Hello New World");
});
app.get("/neverland", (req, res) => {
  res.send("Hello Neverland");
});

app.get("/neverland1", (req, res) => {
  res.send("Hello Neverland 1");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
