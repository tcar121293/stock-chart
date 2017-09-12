const axios = require('axios')
const Stock = require('./stockModel')



module.exports={

sendData:async (req,res,next)=>{
    try{
        const symbol = req.body.symbol
      
        
            const data = await axios({
                method:'get',
                url:'https://www.quandl.com/api/v3/datasets/WIKI/' + symbol + '.json?&order=asc&api_key=sfBM_8CzygxEXETJYqcZ'
            })
            console.log(data.data.dataset.name)
            const stock = await Stock.findOne({'symbol':data.data.dataset.dataset_code})
            console.log(stock)
            if(stock){
                res.send({exists:true})
            }else{
                const newStock = new Stock()
                newStock.name = data.data.dataset.name
                newStock.symbol = data.data.dataset.dataset_code
                await newStock.save()
                res.io.emit('sendData',data.data.dataset)
            }
          
         
    }catch(err){
       
        res.send({exists:true})
        
    }
  
},

getStocks:async (req,res,next)=>{

    try{
       const stocks = await Stock.find({})
       res.send(stocks)
    }catch(err){
        console.log(err)
    }
},
deleteStocks:async (req,res,next)=>{
    
        try{
           const stocks = await Stock.remove({})
           res.send(stocks)
        }catch(err){
            console.log(err)
        
        }
    },
stocks:async (req,res,next)=>{
        
            try{
           const stocks = await Stock.find({})
        
                const data = await axios.all(stocks.map(async (stock)=>{
                    const response = await axios({
                        method:'get',
                        url:'https://www.quandl.com/api/v3/datasets/WIKI/' + stock.symbol + '.json?&order=asc&api_key=sfBM_8CzygxEXETJYqcZ'  
                    })
                    return response.data.dataset
                    
                }))
                axios.spread((data)=>{
                    console.log(data)
                })
      
    res.send(data)
            }catch(err){
                console.log(err.response)
            
            }
        },
deleteStock:async (req,res,next)=>{
try{
    const symbol = req.body.symbol
    const stock = await Stock.remove({symbol:symbol})
    res.send('ok')
}catch(err){

}
}
    



}