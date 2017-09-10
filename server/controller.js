const axios = require('axios')
const Stock = require('./stockModel')



module.exports={

sendData:async (req,res,next)=>{
    try{
        const symbol = req.body.symbol
        const data = await axios({
             method:'get',
             url:'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '.json?sfBM_8CzygxEXETJYqcZ'
         })
         console.log(data.data.dataset.name)

         const newStock = new Stock()
         newStock.name = data.data.dataset.name
         newStock.symbol = data.data.dataset.dataset_code
         await newStock.save()

         res.io.emit('sendData',data.data.dataset)

    }catch(err){
        console.log(err)
    }
  
},

getStocks:async (req,res,next)=>{

    try{
       const stocks = await Stock.find({})
       res.send(stocks)
    }catch(err){
        console.log(err)
    }
}




}