const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    post: String,
    restoreOrLost: {type: Boolean, required: true},
    anonymous: {type: Boolean, default: false},
    userID: currentUser._id
}, {timestamps: true});

module.exports = model('Post', postSchema);