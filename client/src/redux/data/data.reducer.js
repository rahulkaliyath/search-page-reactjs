import dataActionTypes from './data.types';

const INITIAL_STATE = {
    results:[],
    loading:false,
    filters:[],
    appliedFilters:{Source:[],Frequency:[],Unit:[],Tags:[]}
}

const dataReducer = (state=INITIAL_STATE,action) => {
    const {type,payload} = action;
    
    switch(type){

        case dataActionTypes.SEARCH_DATA:
            return {
                ...state,
                results: payload.results,
                filters : payload.filters,
                loading : false,
                appliedFilters:{Source:[],Frequency:[],Unit:[],Tags:[]}
            };

        case dataActionTypes.ADD_FILTER:
            var {category,filter} = payload;
            
            return{
                ...state,
                loading: false,
                appliedFilters: {...state.appliedFilters,
                             [category] : [ ...state.appliedFilters[category] , filter]
                }

            };

        case dataActionTypes.REMOVE_FILTER:
            var {category,filter} = payload;
            return {
                ...state,
                loading: false,
                appliedFilters: {...state.appliedFilters,
                             [category] :state.appliedFilters[category].filter(fil => fil !== filter)
                }
            }

            case dataActionTypes.START_SEARCH:
                return {
                    ...state,
                    loading:true
                }

            case dataActionTypes.SEARCH_FAILED:
                return {
                    ...state,
                    results:[],
                    loading:false,
                    filters:[],
                    appliedFilters:{Source:[],Frequency:[],Unit:[],Tags:[]}
                }



        default:
            return state;
    }
};

export default dataReducer;