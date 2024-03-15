require("dotenv").config()
const path = require("path")
const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/dist")));

const PORT = process.env.PORT || 3000;
const server = "https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp";
const options = {headers: {'Authorization': `${process.env.GITHUB_APIKEY}`}};
//.env data must be put in AWS website
//change server on client side to === '/api/'
//req.url will show the endpoints after api/ ex api/products req.url = /products
///s/products/40344
//request was localhost:1001/s/products/40344
app.get('/api*/', (req, res) => {
  let testurl = req.url;
  testurl = testurl.slice(4);
  const url = `${server}${testurl}`;
  axios.get(url, options)
  .then((response) => {
    res.send(response.data)
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send('error in hitting api')
  })
})
//same for post
app.post('/api*/', (req, res) => {
  let testurl = req.url;
  testurl = testurl.slice(4);
  const url = `${server}${testurl}`;
  axios.post(url, req.body, options)
  .then((response) => {
    res.status(201).send('Posted!')
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send('error in posting to api')
  })
})
app.put('/api*/', (req, res) => {
  let testurl = req.url;
  testurl = testurl.slice(4);
  const url = `${server}${testurl}`;
  axios.put(url, {}, options)
  .then((response) => {
    res.status(201).send('Updated!')
  })
  .catch((err) => {
    console.log(err)
    res.status(500).send('error in posting to api')
  })
})

app.listen(process.env.PORT);
