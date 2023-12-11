const express = require('express')
const app = express()
const itemRoutes = require('./router')

app.use(express.json())
app.use('/items', itemRoutes)

app.listen(4000, () => {
    console.log("port at 4000")
})

