import  React, { Component }  from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

import { sendData, storeData, init, deleteStock } from '../actions/chartActions'

import Chart from '../components/Chart'

 class Layout extends Component{
constructor(){
    super()
    this.sendData = this.sendData.bind(this)
    socket.on('sendData',(data)=>{
     
        this.props.storeData(data)
    })

    this.deleteStock = this.deleteStock.bind(this)
    
}

componentWillMount(){
    this.props.init()
}



    render(){
        return(
            <div>
               <Chart  
               symbols={this.props.symbols}
              exists={this.props.exists}
               config = {this.props.config}
               sendData = {this.sendData}
               deleteStock = {this.deleteStock}
                />
            </div>
        )
    }

//functions

sendData(){

    const symbol = document.getElementById('symbol').value
    this.props.sendData({'symbol':symbol})

}
deleteStock(symbol){
    
    const payload = this.props.symbols.filter((data)=>{
        return data!==symbol.symbol
    })
    console.log(payload)
    this.props.deleteStock(symbol,payload)
    
  

    
}



}

const mapStateToProps = (state)=>{
    return{
    exists:state.chart.exists,
    config:state.chart.config,
    symbols:state.chart.symbols

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      sendData:(symbol)=>{
          dispatch(sendData(symbol))
      },
      storeData: (data)=>{
          dispatch(storeData(data))
      },
      init:()=>{
          dispatch(init())
      },
      deleteStock:(symbol,payload)=>{
          dispatch(deleteStock(symbol,payload))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)