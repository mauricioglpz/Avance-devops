const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

// 1. Conexión con manejo de error (cambia 'db' por 'localhost' si no usas Docker)
const mongoURI = process.env.MONGO_URI || 'mongodb://db:27017/eventos';
mongoose.connect(mongoURI)
    .then(() => console.log("Conectado a MongoDB"))
    .catch(err => console.error("Error crítico: No se pudo conectar a MongoDB", err));

const EventoSchema = new mongoose.Schema({
    mensaje: String,
    fecha: { type: Date, default: Date.now }
});
const Evento = mongoose.model('Evento', EventoSchema);

// 2. Función de log segura (Crea la carpeta si no existe)
function log(tipo, mensaje) {
    const logDir = '/app/logs';
    const logFile = path.join(logDir, 'app.log');
    
    try {
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
        const logMsg = `[${new Date().toISOString()}] ${tipo}: ${mensaje}\n`;
        fs.appendFileSync(logFile, logMsg);
    } catch (err) {
        console.error("No se pudo escribir en el log:", err.message);
    }
}

app.post('/evento', async (req, res) => {
    try {
        if (!req.body.mensaje) return res.status(400).send({ error: "Mensaje requerido" });
        
        const evento = new Evento({ mensaje: req.body.mensaje });
        await evento.save();
        log("INFO", "Evento guardado");
        res.send({ status: "ok" });
    } catch (error) {
        log("ERROR", "Fallo al guardar");
        res.status(500).send({ error: error.message });
    }
});

app.get('/eventos', async (req, res) => {
    try {
        const eventos = await Evento.find().sort({ fecha: -1 });
        res.json(eventos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener datos" });
    }
});

app.delete('/evento/:id', async (req, res) => {
    try {
        await Evento.findByIdAndDelete(req.params.id);
        res.json({ status: "deleted" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar" });
    }
});

app.listen(3000, '0.0.0.0', () => console.log("Backend escuchando en puerto 3000"));
