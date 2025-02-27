import { db } from "../db/db.js"

export const getmovie = async (req, res) => {
    const sql = `select * from movies `
    const result = await db.query(sql)
    res.json(result)
}

export const postmovie = async (req, res) => {

    const temp = req.body
    const params = [temp.movieID, temp.title, temp.releaseyear,temp.genre,temp.duration]
    const sql = `insert into movie() values ($1,$2,$3,$4) returning id_movie`
    const result = await db.query(sql, params)
    res.json({ message: " movie created" })

}

export const putmovie = async (req, res) => {

    const temp = req.body
    const params = [temp.movieID, temp.title, temp.releaseyear,temp.genre,temp.duration]
    const sql = `update movie
            set movieID = $1,
                title = $2,
                release= $3,
                genre= $4
                duration = $5
                where id_movie= $6 returning *`
    const result = await db.query(sql, params)
    res.json({ message: "movie Modified" })
}

export const deletemovie = async (req, res) => {

    const id_actor = req.params.id
    const params = [id_movie]
    const sql = `delete from movie where id_ movie= $1`
    const result = await db.query(sql, params)
    res.json({ message: "movie deleted" })

}