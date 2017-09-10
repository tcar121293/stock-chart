export default function chartReducer(
    state={
       series:[]
    },
    action
){
    switch(action.type){

        case 'STOCK_DATA':{
            return {...state,
             series: [...state.series,{
                 name:action.payload.name,
                 data:action.payload.data
            }]

            }
        }
   
        default:
        return state
    }

}