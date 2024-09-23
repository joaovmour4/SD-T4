const express = require('express')

const app = express()
// app.use(cors())
app.use(express.json())

app.get('*', async (req, res)=>{
    setTimeout(()=>{
        return res.status(200).json({message: 'Olá, server 1'});
    }, 5000)
})

app.listen(3000, ()=>{
    console.log('listening on port 3000')
})