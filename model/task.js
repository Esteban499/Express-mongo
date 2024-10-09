const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = new schema(
    {
        id: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: false, // El título es requerido
        },
        description: {
            type: String,
            required: false, // La descripción es requerida
        },
        start: {
            type: Date,
            required: false // La fecha de inicio es requerida
        },
        end: {
            type: Date,
            required: false // La fecha de finalización es requerida
        },
        status: {
            type: String,
            required: false 
        },
        geoLong: {
            type: Number,
            required: false 
        },
        geoLat: {
            type: Number,
            required: false 
        }
    }
)

module.exports = mongoose.model('task', taskSchema)

//EL GET Llama a routes, dsp a controler y por ultimo a model (aca esta conectada la BD)