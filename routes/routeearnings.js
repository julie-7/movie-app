import express from 'express'
export const earning = express()
import{getearning} from '../controllers/controllingearning.'
import{putearnings,deleteearnings, getearnings, postearnings} from '../controllers/controllerearning.js'

earning.get('/earnings',getearnings)
earning.post('/earnings',postearnings)
earning.put('/earnings',putearnings)
earning.delete('/earnings',deleteearnings)