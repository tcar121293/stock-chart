import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Snackbar from 'material-ui/Snackbar';

import Highstock from './Highstock'


export default class Chart extends Component{
    render(){
        
        const symbols = this.props.symbols.map((symbol)=>{
            return (
                <div key={symbol}>
                    <ListItem disabled={true} primaryText={symbol} rightIconButton={<RaisedButton onClick = {()=>{this.props.deleteStock({symbol:symbol})}} primary={true} label='X' />}>
                    </ListItem>

                </div>
            )
            
        })
       
        return(
            <div>
                <Highstock 
                 config={this.props.config}
                 />
                <TextField id='symbol' hintText="Hint Text"/>
                <RaisedButton onClick={()=>{this.props.sendData()}} label="add" primary={true}  />
                <List>{symbols}</List>
                <Snackbar
                open={this.props.exists}
                message='stock already in chart or no such stock symbol'
             
                autoHideDuration={4000}
              />
            </div>
        )
    }

}