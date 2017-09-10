import React, { Component } from 'react'
import Highcharts from 'highcharts/highstock';


export default class Highstock extends Component{

  
    
    componentDidMount(){
      
    
       
        const chart = Highcharts.stockChart('container',{
            title:{
                text:'Stock-Chart'
            },
            xAxis: {
                categories: ['columnNames']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: this.props.series
        });
        
    }
    
    
    
   
    render(){
      
        return(
            <div>
            <button onClick={()=>{this.change()}}>change</button>
            <div id='container'></div>
            </div>
        )
    }
}