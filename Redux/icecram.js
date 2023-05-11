const redux = require("redux");
const createStore = redux.legacy_createStore;

//*Action Type and Action Creator*//

const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';


const orderIcecream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payLoad: qty,
    }


}

const restockIcecream = (qty = 1) => {

    return {
        type: ICECREAM_RESTOCKED,
        payLoad: qty,
    }
}


//*Reducer Function


const intialState={
    noOfIcecream:10
}

const reducer=(state=intialState,action)=>{
    switch (action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIcecream:state.noOfIcecream-action.payLoad,

            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                noOfIcecream:state.noOfIcecream+action.payLoad,

            }
        default:
            return state;    
    }

}


//*Store

const store=createStore(reducer);
console.log(store.getState());

const unSubscribe= store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());

unSubscribe();