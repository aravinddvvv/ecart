import { createSlice } from "@reduxjs/toolkit";

const wishlistslice=createSlice({
    name:'wishlistslice',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload);
        },
        removeFromWishlist:(state,action)=>{
           return state.filter((item)=>item.id!== action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist}=wishlistslice.actions;
export default wishlistslice.reducer