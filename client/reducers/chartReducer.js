export default function chartReducer(
    state={
        symbols:[],
        exists:false,
        config:{
            
            chart: {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                       [0, '#2a2a2b'],
                       [1, '#3e3e40']
                    ]
                 },
            },
            rangeSelector: {
                selected: 4
            },
    
            yAxis: {
                labels: {
                    formatter: function () {
                        return (this.value > 0 ? ' + ' : '') + this.value + '%';
                    }
                },
                plotLines: [{
                    value: 0,
                    width: 2,
                    color: 'silver'
                }]
            },
    
            plotOptions: {
                series: {
                    compare: 'percent',
                    showInNavigator: true
                }
            },
    
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
                valueDecimals: 2,
                split: true
            },
    
            series: []
        }
    },
    action
){
    switch(action.type){

        case 'STOCK_DATA':{
          
                return {...state,
                    exists:false,
                    config:{...state.config,
                        series:[...state.config.series,
                        action.payload.config
                        ]
                    
                    },
                    symbols:[...state.symbols,
                        action.payload.symbol]

                       }
            }
         
        
        case'INIT':{
            return{...state,
                exists:false,
                config:{...state.config,
                    series:action.payload.data
                
                },
                symbols:action.payload.symbol

            }
        }
        case'EXISTS':{
            return{...state,
                exists:true,

            }
        }
        case 'DELETE_STOCK':{
            return{...state,
                symbols:action.payload

            }
        }
   
        default:
        return state
    }

}