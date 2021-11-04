const express = require('express')
const app = express()

app.get("/task.pug", (request, response) =>{
  let productsLength = products.length
  for (let i = 0; i < productsLength; i++) {
    let delSelectNames = products[i].name
  response.render("task", delSelectNames)
  response.render("task", productsLength)
}
}); 