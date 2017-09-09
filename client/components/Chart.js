import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Highstock from './Highstock'


export default class Chart extends Component{
    render(){
        
        return(
            <div>
                <Highstock columnNames = {this.props.columnNames} data={this.props.data}/>
                <TextField id='symbol' hintText="Hint Text"/>
                <RaisedButton onClick={()=>{this.props.getData()}} label="Primary" primary={true}  />
                  {this.props.error?(
                    <div><p>jebem mu mater, nije dobro</p></div>
                  ):(<div></div>)}  
            </div>
        )
    }




}