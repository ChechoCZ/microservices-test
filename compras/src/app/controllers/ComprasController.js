const fetch = require('node-fetch');

const Compra = require('../models/compra');
const Status = require('../models/status');

class ComprasController {
  async index(req, res) {
    const compras = await Status.find().populate('compra_id', ['description', 'total']);

    res.json(compras);
  }

  async store(req, res) {
    const compra = await Compra.create(req.body);

    const status = await Status.create({
      status: 'em_analise',
      compra_id: compra._id
    });

    setTimeout(async () => {
      status.status = 'pago';

      status.save();

      await fetch('http://localhost:3001/api/avisos', {
        method: 'post',
        body: JSON.stringify(compra),
        headers: { 'Content-Type': 'application/json' }
      });
    }, 60000);

    return res.json(compra);
  }

  async show(req, res) {
    const compra = await Status.findOne({ 
      compra_id: req.params.id
    }).populate('compra_id', ['description', 'total']);

    res.json(compra);
  }

  async destroy(req, res) {
    const compra = await Status.findOneAndUpdate(
      { compra_id: req.params.id },
      { status: 'cancelado' },
      { new: true }
    ).populate('compra_id', ['description', 'total']);

    return res.json(compra);
  }
}

module.exports = new ComprasController();