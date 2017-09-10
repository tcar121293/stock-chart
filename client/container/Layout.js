import  React, { Component }  from 'react'
import { connect } from 'react-redux'
import io from 'socket.io-client';
const socket = io('http://localhost:3000')

import { sendData, storeData } from '../actions/chartActions'

import Chart from '../components/Chart'

 class Layout extends Component{
constructor(){
    super()
    this.sendData = this.sendData.bind(this)
    socket.on('sendData',(data)=>{
        var hiJson = data.data.map(function(d) {
            return [new Date(d[0]).getTime(), d[4]]
          });
     
        this.props.storeData(data)
    })

}





    render(){
        return(
            <div>
               <Chart  
               series = {this.props.series}
               sendData = {this.sendData}
                />
            </div>
        )
    }

//functions

sendData(){

    const symbol = document.getElementById('symbol').value
    this.props.sendData({'symbol':symbol})

}




}

const mapStateToProps = (state)=>{
    return{
    series: state.chart.series

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
      sendData:(symbol)=>{
          sendData(symbol)
      },
      storeData: (data)=>{
          dispatch(storeData(data))
      }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)