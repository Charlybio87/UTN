
/*
crear el modelo
name
workspace
createdBy
createdAt
modifiedAt */
import mongoose from 'mongoose'

const modelSchema = new mongoose.Schema({
    // **Nombre del modelo**
    name: {
        type: String,
        required: true,
    },
    // **Espacio de trabajo asociado**
    workspace: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Workspace', // Referencia al modelo de Workspace
        required: true,
    },
    // **Usuario que creó el modelo**
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ', // Referencia al modelo de User
        required: true,
    },
    // **Fecha de creación**
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // **Fecha de última modificación**
    modifiedAt: {
        type: Date,
        default: Date.now,
    },
})

// **Middleware para actualizar la fecha de modificación antes de guardar**
// modelSchema.pre('save', function (next) {
//     this.modifiedAt = Date.now();
//     next();
// })

// **Exportar el modelo**
const Channel= mongoose.model("Channel", channelSchema)
export default Channel