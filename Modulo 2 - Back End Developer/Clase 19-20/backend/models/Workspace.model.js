import mongoose from 'mongoose'

const workspaceSchema = new mongoose.Schema({
  name: {type:String, required:true},
  owner: {//creador del workspace (USUARIO)
    type:mongoose.Schema.Types.ObjectId, 
    ref:'User', 
    required:true
  },
  members: [{//miembros del workspace (array de USUARIOS)
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
  }],
  createrAt: {
    type:Date,
    default:Date.now
  },
  modifiedAt: {
    type:Date,
    default:null
  }
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

export default Workspace