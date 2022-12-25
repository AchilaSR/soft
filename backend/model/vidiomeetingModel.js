const mongoose = require('mongoose')

const vidiomeetingSchema = new mongoose.Schema({
    userid: {type: String, },
    meetingid: {type: String, },
    
},

{
    timestamps: true
})

module.exports = mongoose.model('vidiomeeting', vidiomeetingSchema)