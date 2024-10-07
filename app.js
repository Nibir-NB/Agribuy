const express = require('express');
const {users} = require('./json.js');
const path = require('path');

const app = express();


app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
app.get('/styles.css', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./styles.css'))
})



app.get('/user', ( req, res )=>{
    res.json(users);
})


app.get('/user-intro', (req, res)=>{
    const userIntro = users.map( (user)=>{
        const { name, profilePicture,experience, experties } = user;
        return {name, profilePicture, experience, experties }
    })
    res.json(userIntro);

})


app.get(`/user/:userId` , ( req, res )=>{
    const { userId } = req.params
    const userOne = users.find( (user)=>user.id === Number(userId))
    res.json({userOne});
})





app.listen(5000, ()=>{
    console.log('The app is listening at http://localhost:5000');
    
})
