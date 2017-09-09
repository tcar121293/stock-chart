export default function chartReducer(
    state={
        columnNames:[],
        error:false,
        data:[]
    },
    action
){
    switch(action.type){

        case 'GET_DATA':{
            return {
                ...state,
                error:false,
                columnNames:action.payload.column_names,
                data:action.payload

            }
        }
        case 'ERROR':{
            return{
                ...state,
                error:true
            }
        }
        default:
        return state
    }

}