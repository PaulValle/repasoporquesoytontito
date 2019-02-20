const Worker = require('../models/worker');

const workerCtrl = {};

workerCtrl.getWorkers = async (req,res,next) => {
const worker = await Worker.find();
res.json(worker);
}

workerCtrl.createWorker = async (req, res,next) => {
    console.log(req.body);
const worker = new Worker({
    nombre: req.body.nombre,
    color: req.body.color,
    novia: req.body.novia
});
await worker.save();
res.json({status: 'worker Created'});
};

workerCtrl.getWorker = async (req, res, next) => {
const { id } = req.params;
const worker = await Worker.findById(id);
res.json(worker);
};

workerCtrl.editWorker = async (req, res, next) => {
console.log(req.params);
console.log(req);
const { id } = req.params;
const worker = {
    nombre: req.body.nombre,
    color: req.body.color,
    novia: req.body.novia
};
await Worker.findByIdAndUpdate(id, {$set: worker}, {new: true});
res.json({status: 'worker Updated'});
};

workerCtrl.deleteWorker = async (req, res, next) => {
await Worker.findByIdAndRemove(req.params.id);
res.json({status: 'worker Eliminated'});

};

module.exports = workerCtrl;