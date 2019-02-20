const mongoose = require('mongoose');
const { Schema } = mongoose;

const mascotaSchema = new Schema({
nombre: { type: String, required: true},
edad: { type: String, required: true },
owner: { type: String, required: true }
});

module.exports = mongoose.model('Mascota', mascotaSchema);