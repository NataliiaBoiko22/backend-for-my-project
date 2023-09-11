import mongoose from 'mongoose'
import { PORT } from './constants'

import * as serverService from './services/server.service';
import dotenv from 'dotenv';

dotenv.config();

(async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI is not defined in the environment variables');
    }
    await mongoose.connect(
      // 'mongodb+srv://nataboykokras:qtV1xEoap0fZvxQB@cluster0.scg8pkw.mongodb.net/?retryWrites=true&w=majority'
    
      // 'mongodb+srv://boikonataliia37:QBq9lSVVy0NAgkno@cluster0.ryxizcx.mongodb.net/test'
      process.env.MONGODB_URI
      )
    serverService.server.listen(process.env.PORT || PORT, function () {
      console.log('Сервер ожидает подключения...')
    })
  } catch (error) {
    console.log(error)
  }
})()

process.on('SIGINT', async () => {
  await mongoose.disconnect()
  process.exit()
})
