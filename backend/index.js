const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://db:27017/eventos');

// MODELO
const EventoSchema = new mongoose.Schema({
    mensaje: String,
    fecha: { type: Date, default: Date.now }
});

const Evento = mongoose.model('Evento', EventoSchema);

// LOG
function log(tipo, mensaje) {
    const logMsg = `[${new Date().toISOString()}] ${tipo}: ${mensaje}\n`;
    fs.appendFileSync('/app/logs/app.log', logMsg);
}
// CREAR EVENTO
app.post('/evento', async (req, res) => {
    const evento = new Evento({ mensaje: req.body.mensaje });
    await evento.save();

    log("Evento guardado");

    res.json({ status: "ok", evento });
});

// OBTENER EVENTOS
app.get('/eventos', async (req, res) => {
    const eventos = await Evento.find().sort({ fecha: -1 });
    res.json(eventos);
});

//  ELIMINAR EVENTO (ESTO TE FALTABA)
app.delete('/evento/:id', async (req, res) => {
    await Evento.findByIdAndDelete(req.params.id);
    log("Evento que ha sido creado, eliminado");

    res.json({ status: "deleted" });
});

app.listen(3000, () => console.log("Backend corriendo en 3000"));