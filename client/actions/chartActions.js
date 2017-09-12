import axios from 'axios'


export function sendData(symbol){
    return dispatch=>{
        axios({
            method:'post',
            url:'/',
            data:symbol
        }).then((res)=>{
            dispatch({type:'EXISTS', payload:res.data})
    
        })
    }
   
}

export function storeData(data){
    return dispatch=>{
     
        const confi = data.data.map((data)=>{
            return [new Date(data[0]).getTime(), data[4]];
        })
        const number = Math.floor(Math.random() * 10)
        
        const config = {
            name:data.name,
            data:confi,
            symbol:data.dataset_code,
            _colorIndex:number
        }
        
        console.log(data)
        dispatch({type:'STOCK_DATA',payload:{
            symbol:data.dataset_code,
            config:config
        }})
    }
}

export function init(){
    return dispatch=>{
        axios({
            method:'get',
            url:'/getStocks'
        }).then((res)=>{
            
            const data = res.data.map((data)=>{
                const confi = data.data.map((data)=>{
                    return [new Date(data[0]).getTime(), data[4]];
                })
                const number = Math.floor(Math.random() * 10)
                
                return {
                    name:data.name,
                    data:confi,
                    symbol:data.dataset_code,
                    _colorIndex:number
                }
                
            })
            const symbols = res.data.map((data)=>{
                return data.dataset_code
            })
            dispatch({type:'INIT',payload:{
                data:data,
                symbol:symbols
                

            }})
        })
    }
}

export function deleteStock(symbol){

    return dispatch =>{
        axios({
            method:'delete',
            url:'/deleteStock',
            data:symbol
        })
    }

}

export function deleteLocalStock(payload){
    return dispatch=>{
        console.log(payload)
        dispatch({type:'DELETE_STOCK',payload:payload})
        
    }
    
}
    
