const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

users.get('/new', (req, res)=>{
    res.render('users/New')
})

users.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser)=>{
        res.redirect('/posts')
    })
})

users.get('/:id', (req, res)=>{
    res.send('Profile works')
    // if(!req.session.currentUser){
    //     res.send('You need to log in')
    // } else if(req.session.currentUser._id === req.params.id){
    //     res.render('users/Index')
    // } else{
    //     res.send('How did you get here?')
    //     // setTimeout(res.redirect('/posts'), 2000)
    // }
})

module.exports = users;