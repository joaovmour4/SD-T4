const express = require('express')

const app = express()
// app.use(cors())
app.use(express.json())

app.get('*', async (req, res)=>{
    return res.status(200).json({message: 'Olá, server 2'});
})

app.listen(3001, ()=>{
    console.log('listening on port 3001')
})