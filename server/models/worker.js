const mongoose = require('mongoose');
const { Schema } = mongoose;

const workerSchema = new Schema({
nombre: { type: String, required: true},
color: { type: String, required: true },
novia: { type: String, required: true }
});

module.exports = mongoose.model('Worker', workerSchema);