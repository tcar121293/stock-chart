import  React, { Component }  from 'react'
import { connect } from 'react-redux'

import { getData, reciveData } from '../actions/chartActions'

import Chart from '../components/Chart'

 class Layout extends Component{
constructor(){
    super()
    this.getData = this.getData.bind(this)
}

componentWillMount(){
    this.props.reciveData()
}
    render(){
        return(
            <div>
               <Chart
                error={this.props.error}
                columnNames={this.props.columnNames}
                data={this.props.data}
                getData = {this.getData} 
                
                />
            </div>
        )
    }

//functions

getData(){
    const symbol = document.getElementById('symbol').value
    this.props.getData(symbol)

}










}

const mapStateToProps = (state)=>{
    return{
        data:state.chart.data,
        columnNames:state.chart.columnNames,
        error:state.chart.error,

    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        getData:(symbol)=>{
            getData(symbol)
        },
        reciveData:()=>{
            dispatch(reciveData())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Layout)