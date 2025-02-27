import pg from 'pg-promise'
import dotenv from 'dotenv'
dotenv.config()

const pgc = pg()
const str = process.env.CN_STR

export const db = pgc(str)

db.connect()
.then(()=>{
console.log("success connection")
})
.catch((err) =>{
console.log(`Error Conection ${err}`)
})