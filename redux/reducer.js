import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    acceoriesShop: {
        perpage: 20,
        sortBy: '', //name,price, favourite
        searchResult: '',
        viewState: 1 //1: thLarge, 2: list
    }
}
export const ReducerSlice = createSlice({
    name: 'hekto_reducer',
    initialState,
    reducers: {
        changePerPageQuantity:(state, action) => {
            state.acceoriesShop.perpage = action.payload;
        },
        sortProduct:(state , action) =>{
            state.acceoriesShop.sortBy = action.payload
        },
        searchProduct: (state, action) => {
            state.acceoriesShop.searchResult = action.payload
        },
        selectViewState: (state, action) => {
            state.acceoriesShop.viewState = action.payload
        }
        
    }
})


export default ReducerSlice.reducer
export const {changePerPageQuantity, sortProduct, searchProduct, selectViewState} = ReducerSlice.actions