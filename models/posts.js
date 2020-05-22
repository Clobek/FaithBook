const {Schema, model} = require('mongoose');

const postSchema = new Schema({
    title: String,
    body: String,
    anonymous: {type: Boolean, default: true}
}, {timestamps: true});

module.exports = model('Post', postSchema);