const mongoose = require('mongoose');

const GymSchema = mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Gyms', GymSchema);