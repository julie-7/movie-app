import express from 'express'
export const movie = express()
import{putmovie,deletemovie, getmovie, postmovie} from '../controllers/controllermovies.js'

movie.get('/movies',getmovie)
movie.post('/movies',postmovie)
movie.put('/movies',putmovie)
movie.delete('/movies',deletemovie)