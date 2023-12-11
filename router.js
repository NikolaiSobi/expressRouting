const express = require('express')
const router = new express.Router()
let items = require('./fakeDb')

router.get('/', (req, res) => {
    res.json(items)
})

router.post('/', (req, res) => {
    let newItem = {"name": req.body.name, "price": req.body.price}
    items.push(newItem)
    res.json(newItem)
})

router.get('/:name', (req, res) => {
    for(let i = 0; i < items.length; i++){
        if(items[i].name === req.params.name){
            res.json(items[i])
        }
    }
    res.status(404).send(`${req.params.name} does not exist`)
})

router.patch('/:name', (req, res) => {
    for(let i = 0; i < items.length; i++){
        if(items[i].name === req.params.name){
            items[i] = {"name": req.body.name, "price": req.body.price}
            res.json(items[i])
        }
    }
})

router.delete('/:name', (req, res) => {
    for(let i = 0; i < items.length; i++){
        if(items[i].name === req.params.name){
            items.splice(i, 1)
            res.json("Message: Deleted")
        }
    }
})
module.exports = router