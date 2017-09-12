import React, { Component } from 'react'

const ReactHighstock = require('react-highcharts/ReactHighstock')


export default class Highstock extends Component{

  
    render(){
        return(
            <div>
            <button onClick={()=>{this.change()}}>change</button>
          
            <ReactHighstock config = {this.props.config}></ReactHighstock>
            </div>
        )
    }
}