import {GET_LOTEOS, GET_MEDIDORES} from './actions'

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
            
        default:
            return {...state}
    }
}

export default rootReducer