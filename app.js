const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const morgan = require('morgan')

require('dotenv/config')

const api = process.env.API_URL

//Middleware
app.use(express.json())
app.use(morgan('tiny'))

app.get(`${api}/products`, (req, res) => {
  const products = {
    id: 1,
    name: 'Hair dryer',
    image: 'some_url'
  }
  res.send(products)
});

app.post(`${api}/products`, (req, res) => {
  const newProduct = req.body
  console.log(newProduct)
  res.send(newProduct)
});

mongoose.connect('mongodb+srv://uhanierwin:RaQRKvINTyqKNhvp@cluster0.gcqwcb2.mongodb.net/')
.then(() => {
  console.log('Database connection is ready')
}).catch((err) => {
  console.log(err)
})

app.listen(3004, () => {
  console.log(api)
  console.log("Server is running http://localhost:3004")
});
