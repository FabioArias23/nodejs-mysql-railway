import express from "express"
import {pool} from './db.js'
const app = express()
import {PORT} from './config.js'

app.get('/', async (req, res) => {
    const [rows] = await pool.query( 'SELECT * FROM users ');
    res.json(rows)
})
app.get('/ping', async(req, res) => {
    
    const [result] = await pool.query(`SELECT "hello world" as RESULT`);
    console.log(result)
    res.send('welcome to server')
})
app.get('/create', async (req,res)=>{
 const result = await pool.query('INSERT INTO users(name) VALUES("John")');
 res.json(result[0])
})
app.listen(PORT)
console.log('server on port 3000',PORT)