import { db } from "../db/db.js"

export const getearning = async (req, res) => {
    const sql = `select * from earnings`
    const result = await db.query(sql)
    res.json(result)
}

export const postearning = async (req, res) => {

    const temp = req.body
    const params = [temp.earningID, temp.movieID, temp.country, temp.revenue]
    const sql = `insert into earning() values ($1,$2,$3,$4) returning id_`
    const result = await db.query(sql, params)
    res.json({ message: " earning created" })

}

export const putearning = async (req, res) => {

    const temp = req.body
    const params = [temp.earningID, temp.movieID, temp.country, temp.revenue]
    const sql = `update earning
            set earningID = $1,
                movieID= $2,
                country= $3,
                revnue= $4
                where id_earning= $5 returning *`
    const result = await db.query(sql, params)
    res.json({ message: "earning Modified" })
}

export const deleteearning = async (req, res) => {

    const id_actor = req.params.id
    const params = [id_earning]
    const sql = `delete from earning where id_earning = $1`
    const result = await db.query(sql, params)
    res.json({ message: "earning deleted" })

}