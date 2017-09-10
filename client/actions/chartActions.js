import axios from 'axios'


export function sendData(symbol){
    axios({
        method:'post',
        url:'/',
        data:symbol
    })
}

export function storeData(data){
    return dispatch=>{
        const jsondata = data.data.map((data)=>{
            return [new Date(data[0]).getTime(), data[4]];
        })
          console.log(jsondata)
        dispatch({type:'STOCK_DATA',payload:{
            name:data.name,
            data:jsondata
        }})
    }
}

    
