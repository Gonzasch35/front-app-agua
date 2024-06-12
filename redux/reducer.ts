import {GET_LOTEOS, GET_MEDIDORES, GET_MEDIDOR_BY_ID, PUT_LECTURA_BY_MEDIDOR} from './actions'

const initialState = {
    loteos: [],
    medidores: [],
    medidor_detail: []
}

const rootReducer = (state = initialState, action : any) => {
    switch (action.type) {
        case GET_LOTEOS:
            return {...state, loteos: action.payload}

        case GET_MEDIDORES:
            return {...state, medidores: action.payload} 
            
        case GET_MEDIDOR_BY_ID:
            return {...state, medidor_detail: action.payload}

        case PUT_LECTURA_BY_MEDIDOR:

        const newData = state.medidores.map( (medidor : any) =>{
            if(medidor.medidor == action.payload.medidor){
                medidor = action.payload;
            }

            return medidor;
        })

            return {
                ...state,
                medidores: newData,
                medidor_detail: action.payload
            };
        default:
            return {...state}
    }
}

export default rootReducer