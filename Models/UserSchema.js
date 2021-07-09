const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required:[true, 'svp entrez votre nom !!' ]
    },
    lastname: String,
    age: Number,
    ville: String
})

module.exports = mongoose.model('User', UserSchema)