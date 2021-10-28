const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    
    performance:{
        cpu:{
            threads: {
                type: String,
                required: true
            },
            use: {
                type: String,
                required: true
            },
            speed: {
                type: String,
                required: true
            },
            process: {
                type: String,
                required: true
            },
        },
        ram:{
            useram: {
                type: String,
                required: true
            },
            free: {
                type: String,
                required: true
            },
            cache: {
                type: String,
                required: true
            },
        },
        disk:{
            activtime: {
                type: String,
                required: true
            },
            readspeed: {
                type: String,
                required: true
            },
            writespeed: {
                type: String,
                required: true
            },
        },
        debit:{
            send: {
                type: String,
                required: true
            },
            receive: {
                type: String,
                required: true
            },
        }}
});

module.exports = mongoose.model('Composants', PostSchema);