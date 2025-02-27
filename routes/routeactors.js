import express from 'express'
export const actor = express()
import{getactor} from '../controllers/controllingactor.'
import{putactor,deleteactor, getactors, postactors} from '../controllers/controlleractors'

actor.get('/actors',getactors)
actor.post('/actors',postactors)
actor.put('/actors',putactor)
actor.delete('/actors',deleteactor)