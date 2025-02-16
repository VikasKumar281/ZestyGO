import { createSlice , current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        
        //REDUCER FUNCTION
        addItem: ( state , action ) => {
            //It(addItem) will modify the state based on the action

            //Vanilla(older version) Redux => Don't Mutate State
            // const newState = [...state];
            //newState.items.push(action.payload);
            // return newState;



            //Redux Toolkit uses immer JS library behind the scenes 
            //We have to mutate the state
            // mutating the state here
            state.items.push( action.payload );
        },


        removeItem: ( state , action ) => {
            state.items.pop();
        },

        //originalState = { items : [ " pizza " ] }
        clearCart: ( state , action ) =>{
            //This state is a local variable , you have to modify it.
            //console.log(state); ----> It will not show properly,If you have to show properly then use this below line--->
            // console.log(current(state));
            // state=[];
            // console.log(state);
            // state = [] or state = ["Vikas"];---->It is not actually mutating or modifying the state , It is just adding a reference to it So in this case if you have to make it empty ,you have to actually mutate the state and you can mutate by using below line.
            //This will basically mutate your state.
            // state.items.length = 0; // originalState =[]

            // RTK says --> either Mutate the existing state or return a new state.
            return { items : [] }; // this new object([]) will be replaced inside originalState = { items : [] }.
        },
    },
});

  

//Named Export----> 
export const { addItem , removeItem , clearCart } = cartSlice.actions;

export default cartSlice.reducer;  