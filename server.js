//Setup\\
const express = require('express');
const mongoose = require ('mongoose');
const session = require('express-session')
const bcrypt = require('bcrypt')
const User = require('./models/users.js')
const postController = require('./controllers/posts.js')
const userController = require('./controllers/users.js')
const app = express ();
require('dotenv').config()
const db = mongoose.connection;
const methodOverride = require('method-override');

//Heroku Port\\
const PORT = process.env.PORT || 3000;

//Database\\
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/project2';
mongoose.connect(MONGODB_URI || process.env.MONGOURI, { useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true });
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('Mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('Mongo disconnected'));
db.on('open' , ()=>{});

//Middleware\\
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
app.use(methodOverride('_method'))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

//Controllers\\
app.use('/posts', postController)
app.use('/user', userController)

//Authorization Routes\\

const isAuthenticated = (req, res, next)=>{
    if(req.session.currentUser){
        return next()
    } else {
        res.redirect('/sessions/new')
    }
}

//Authorization Routes\\
app.get('/sessions/new', (req, res)=>{
    res.render('sessions/New', {currentUser: req.session.currentUser})
})

//Authentication Route\\
app.post('/sessions', (req, res)=>{
    User.findOne({username: req.body.username}, (error, foundUser)=>{
        if(error){
            res.send(error)
        } else if (!foundUser){
            res.redirect('/user/new')
        } else {
            if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                req.session.currentUser = foundUser
                res.redirect('/posts')
            } else{
                res.send('WRONG PASSWORD')
            }
        }
    })
})

app.delete('/sessions', (req, res)=>{
    req.session.destroy(()=>{
        res.redirect('/sessions/new')
    })
})

//Port Listener\\
app.listen(PORT, ()=>{
  console.log( 'Listening on port:', PORT)
});