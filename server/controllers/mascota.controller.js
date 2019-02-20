const Mascota = require('../models/mascota');

const mascotaCtrl = {};

mascotaCtrl.getMascotas = async (req,res,next) => {
const mascota = await Mascota.find();
res.json(mascota);
}

mascotaCtrl.createMascota = async (req, res,next) => {
    console.log(req.body);
const mascota = new Mascota({
    nombre: req.body.nombre,
    edad: req.body.edad,
    owner: req.body.owner
});
await mascota.save();
res.json({status: 'mascota Created'});
};

mascotaCtrl.getMascota = async (req, res, next) => {
const { id } = req.params;
const mascota = await Mascota.findById(id);
res.json(mascota);
};

mascotaCtrl.editMascota = async (req, res, next) => {
console.log(req.params);
console.log(req);
const { id } = req.params;
const mascota = {
    nombre: req.body.nombre,
    edad: req.body.edad,
    owner: req.body.owner
};
await Mascota.findByIdAndUpdate(id, {$set: mascota}, {new: true});
res.json({status: 'mascota Updated'});
};

mascotaCtrl.deleteMascota = async (req, res, next) => {
await Mascota.findByIdAndRemove(req.params.id);
res.json({status: 'mascota Eliminated'});

};

module.exports = mascotaCtrl;