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
    res.render('New', {currentUser: req.session.currentUser})
})

//Create Route\\
postController.post('/', isAuthenticated, (req, res)=>{
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
       Post.create({post: req.body.post, restoreOrLost: req.body.restoreOrLost, username: req.body.username, userID: req.session.currentUser._id}, (error, createdPost)=>{
        console.log(createdPost)
        res.redirect('/posts')
    })
})

//Show Routes\\
postController.get('/restore', (req, res)=>{
    Post.find({restoreOrLost: 'Restore'}, (error, foundPosts)=>{
        res.render('Show', {
            random: foundPosts[Math.floor(Math.random()*foundPosts.length)],
            currentUser: req.session.currentUser
        })
    })
})

postController.get('/lost', (req, res)=>{
    Post.find({restoreOrLost: 'Lost'}, (error, foundPosts)=>{
        res.render('Show', {
            random: foundPosts[Math.floor(Math.random()*foundPosts.length)],
            currentUser: req.session.currentUser
        })
    })
})

//Edit Route\\
postController.get('/edit/:id', isAuthenticated, (req, res)=>{
    Post.findById(req.params.id, (error, foundPost)=>{
        res.render('Edit', {post: foundPost, currentUser: req.session.currentUser})
    })
})

//Update Route\\
postController.put('/edit/:id', isAuthenticated, (req, res)=>{
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
    Post.findByIdAndUpdate(req.params.id, {post: req.body.post, restoreOrLost: req.body.restoreOrLost, username: req.body.username, userID: req.session.currentUser._id}, (error, data)=>{
        res.redirect(`/user/${req.session.currentUser._id}`)
    })
})


//Drop Database Route\\
// postController.get('/01100100011100100110111101110000', (req, res)=>{
//     Post.db.dropDatabase(()=>{
//         console.log('DB Dropped')
//     })
//     res.redirect('/posts')
// })

//Export\\
module.exports = postController;
