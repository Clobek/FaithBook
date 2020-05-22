//Setup\\
const express = require('express')
const postController = express.Router()
const mongoose = require('mongoose')
const Post = require('../models/posts.js')
const isAuthenticated = (req, res, next)=>{
    if(req.session.currentUser){
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

//Routes\\