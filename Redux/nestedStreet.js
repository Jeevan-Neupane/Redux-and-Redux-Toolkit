const redux = require("redux");
const produce=require("immer").produce;

const createStore = redux.legacy_createStore;
const UPDATE_STREET="UPDATE_STREET";

const updateStreet=(street)=>{
    return {
        type:UPDATE_STREET,
        payLoad:street,
    }
}



const intialState={
    name:"Jeevan Neupane",
    address:{
        city:"Lalitpur",
        street:"Pulchowk",
        ward:19,
        
    }
}

const reducer=(state=intialState,action)=>{
    switch(action.type){
        case UPDATE_STREET:
            // return {
            //     ...state,
            //     address:{
            //         ...state.address,
            //         city:action.payLoad,
            //     }
            // }
            return produce(state,(draft)=>{
                draft.address.city=action.payLoad
            })
        default:{
            return state;
        }    
    }
}



const store=createStore(reducer);

console.log(store.getState());

const unsubscribe= store.subscribe(()=>{
    console.log("Updated Store",store.getState())
});

store.dispatch(updateStreet("Dharan"));



unsubscribe();