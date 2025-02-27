import{db} from "../db/db.js"

export const getactors = async(req,res)=>{
const sql = `select * from actors`
const result = await db.query(sql)
res.json(result)
}

export const postactors = async (req,res)=>{

const temp = req.body
const params = [temp.actorID,temp.name,temp.dateofbirth,temp.nationality]
const sql = `insert into actors(actorID,name,dateofbirth,nationality) values ($1,$2,$3,$4) returning id_actor`
const result = await db.query(sql,params)
res.json({message: "actor created"})

}

export const putactor = async (req,res)=>{

const temp = req.body
const params =[temp.actorID,temp.name,temp.dateofbirth,temp.nationality]
const sql = `update actors 
            set actorID = $1,
                name = $2,
                dateofbirth = $3,
                natioality= $4
                where id_actor = $5 returning *`
                const result = await db.query(sql, params)
                res.json({message:"actor Modified"})
                }

            export const deleteactor = async (req,res)=>{

            const id_actor = req.params.id
            const params = [id_actor]
            const sql = `delete from actor where id_actor = $1`
            const result = await db.query(sql,params)
            res.json({message: "actor deleted"})
        }