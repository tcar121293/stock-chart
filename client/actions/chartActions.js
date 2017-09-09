import axios from 'axios'
import io from 'socket.io-client';
const socket = io('http://localhost:3000')


export function getData(symbol){
        socket.emit('getdata',symbol)   
}
export function reciveData(){
    return dispatch=>{
        socket.on('err',()=>{
            dispatch({type:'ERROR'})  
      }
    )
    socket.on('getData',(data)=>{
        dispatch({type:'GET_DATA', payload:data})  
  }
)
    }
    
}


    
