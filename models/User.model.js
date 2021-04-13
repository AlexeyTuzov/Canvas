const {Schema, model, Types} = require('mongoose');

const template = Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    ID: {type: Types.ObjectId, ref: 'Tabs'}
})

module.exports = model('User', template);