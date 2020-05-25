const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    post: {type: String, required: true},
    restoreOrLost: {type: String, required: true},
    username: String,
    userID: String,
    postID: [0]
}, {timestamps: true});

module.exports = model('Post', postSchema);