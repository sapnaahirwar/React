import { createSlice } from "@reduxjs/toolkit";
const colorSlice = createSlice({
    name:"mycolor",
    initialState:{
        color:"pink"
    },
    reducers:{
        mycolor:(state,actions)=>{
            state.color= actions.payload;
        }
    }
})
export const {mycolor}= colorSlice.actions;
export default colorSlice.reducer;