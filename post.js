const express = require('express')
const app = express()
const buyers = require('./buyer.js')

app.use(express.urlencoded({extended:false}))
app.use(express.json())



app.get('/',(req, res)=>{
    res.send('Home')
})





app.get('/user/add',(req, res)=>{
    res.status(200).json({sucess:true, data:buyers})
})

//Adding a user using post

app.post('/user/add',(req, res)=>{
    const {name} =req.body
    if(name){
        return res.status(200).send(`${name} Added Successfully`)
    }

    res.status(401).send('Please provide credentials')
})




app.listen(5000, () => console.log(`Server is running on port 50000`))