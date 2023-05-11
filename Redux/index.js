const redux = require("redux");

const createStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

//******** Actions *******//



const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
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

function orderCake() {

    return {
        type: CAKE_ORDERED,
        payLoad: 1,//&Payload is this


    }

}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payLoad: qty,
    }
}

//******** Reducers *******//


//!(previouState,action)=>newState //&new State

//?According to first Principle of redux the global state of your application  is stored as an object inside single store

const intialCakeState = {
    numberOfCakes: 10,


}
const intialIcecreamState = {
    noOfIcecream: 10,


}


const cakeReducer = (state = intialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payLoad
            }

        default:
            return state;
    }
}
const iceCreamReducer = (state = intialIcecreamState, action) => {
    switch (action.type) {

        case ICECREAM_ORDERED:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream - action.payLoad,

            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                noOfIcecream: state.noOfIcecream + action.payLoad,

            }
        default:
            return state;
    }
}


//******************Create Store   ***********************//

const rootReducers = combineReducers({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

const store = createStore(rootReducers);

console.log("Intial State", store.getState());

const unSubscribe = store.subscribe(() => {
    console.log("Updated State", store.getState());
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3))
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(orderIcecream());
store.dispatch(restockIcecream(3))

unSubscribe();