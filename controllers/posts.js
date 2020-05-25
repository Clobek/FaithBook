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
//Index Route\\
postController.get('/', (req, res)=>{
    Post.find({}, (error, allPosts)=>{
        res.render('Index', {
            posts: allPosts,
            currentUser: req.session.currentUser
        })
    })
})

//New Route\\
postController.get('/new', isAuthenticated, (req, res)=>{
    res.render('New')
})

//Create Route\\
postController.post('/', isAuthenticated, (req, res)=>{
    console.log(Post.postID)
    console.log(postID)
    if (req.body.anonymous === 'on'){
        req.body.username = 'Anonymous';
    } else {
        req.body.username = `${req.session.currentUser.username}`;
    }
    if(req.body.restoreOrLost === 'Restored faith in humanity'){
        req.body.restoreOrLost = 'Restore';
    } else if (req.body.restoreOrLost === 'Lost faith in humanity'){
        req.body.restoreOrLost = 'Lost';
    }
    Post.create({post: req.body.post, restoreOrLost: req.body.restoreOrLost, username: req.body.username, userID: req.session.currentUser._id, postID: postID.push(postID.length)}, (error, createdPost)=>{
        console.log(createdPost)
        res.redirect('/posts')
    })
})

//Delete Route\\
postController.delete('/:id', isAuthenticated, (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (error, data)=>{
        res.redirect('/posts')
    })
})

//Show Route\\
postController.get('/:id', (req, res)=>{
    Post.findById(req.params.id, (error, foundPost)=>{
        res.render('Show', {
            post: foundPost
        })
    })
})

//Edit Route\\
postController.get('/edit/:id', isAuthenticated, (req, res)=>{
    Post.findByIdAndRemove(req.params.id, (error, foundPost)=>{
        res.render('Edit', {post: foundPost})
    })
})

//Update Route\\
postController.put('/edit/:id', isAuthenticated, (req, res)=>{
    if(req.body.anonymous === 'on'){
        req.body.anonymous = true;
    } else{
        req.body.anonymous = false;
    }
    Post.findByIdAndUpdate(req.params.id, req.body, (error, data)=>{
        res.redirect('/posts')
    })
})

//Export\\
module.exports = postController;
