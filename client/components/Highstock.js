import React, { Component } from 'react'

const ReactHighstock = require('react-highcharts/ReactHighstock')


export default class Highstock extends Component{

  
    render(){
        return(
            <div>
          
            <ReactHighstock ref='chart' config = {this.props.config}></ReactHighstock>
            </div>
        )
    }
}