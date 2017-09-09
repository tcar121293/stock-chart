import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock';


export default class Highstock extends Component{
    
    componentDidMount(){
        const columnNames = this.props.columnNames
        console.log(columnNames)
        const data = this.props.data
        Highcharts.stockChart('container',{
            title:{
                text:'Stock-Chart'
            },
            xAxis: {
                categories: columnNames
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }]
        });
        
    }
    

       
    
    render(){
        console.log(this.props.columnNames)
        return(
            <div id='container'></div>
        )
    }
}