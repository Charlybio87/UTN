/* crear modelo
chanel
sender
content
createdAt
modifiedAt
 */

import mongoose from 'mongoose';
import ChannelModel from './ChannelModel';

const channelSchema = new mongoose.Schema({
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ChannelModel', // Referencia al modelo ChannelModel
    required: true,
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User  ', // Referencia al modelo User
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  modifiedAt: {
    type: Date,
    default: Date.now,
  },
})

const Channel = mongoose.model('Channel', channelSchema)
export default Channel