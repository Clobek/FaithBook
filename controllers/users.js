const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const Post = require('../models/posts.js')
const isAuthenticated = (req, res, next)=>{
    if(req.session.currentUser){
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

users.get('/new', (req, res)=>{
    res.render('users/New')
})

users.post('/', (req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, createdUser)=>{
        res.redirect('/posts')
    })
})

users.get('/:id', isAuthenticated, (req, res)=>{
    if(req.session.currentUser._id === req.params.id){
        Post.find({userID: req.session.currentUser._id}, (error, yourPosts)=>{
            console.log(yourPosts)
            res.render('users/Index', {
                currentUser: req.session.currentUser,
                posts: yourPosts
            })
        })
    } else{
        res.redirect('/posts')
    }
})

//Delete Route\\
users.delete('/:id', isAuthenticated, (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (error, data)=>{
        res.redirect('/posts')
    })
})

module.exports = users;