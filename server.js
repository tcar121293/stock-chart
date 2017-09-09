const express = require('express')
const path = require('path')
const socket = require('socket.io')
const axios = require('axios')

const app = express()

app.use(express.static(path.join(__dirname, 'client/public')))


app.route('*').get((req,res)=>{
    res.sendFile(path.join(__dirname, 'client/public/index.html'))
})

const port = process.env.PORT||3000
const server = app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

const io = socket(server)

io.on('connection',(socket)=>{
    console.log('connected')

    socket.on('getdata',(data)=>{

        axios({
            method:'get',
            url:'https://www.quandl.com/api/v3/datasets/WIKI/'+ data + '/data.json'
            
        })
        .then((res)=>{
           
            io.sockets.emit('getData',res.data)
            
        })
        .catch((err)=>{
            console.log('err')
            io.sockets.emit('err',{error:'err'})
        })
    })
})

