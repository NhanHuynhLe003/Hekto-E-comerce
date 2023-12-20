import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopCategory: {
    perpage: 20,
    sortBy: "",
    searchResult: "",
    viewState: 1,
  },
  shopList: {
    perpage: 20,
    sortBy: "",
    searchResult: "",
    viewState: 1,
  },
  shopLeftSideBar: {
    perpage: 20,
    sortBy: "",
    searchResult: "",
    viewState: 1,
    listProductBrand: {},
    discountOffers: {},
  },
};
export const ReducerSlice = createSlice({
  name: "hekto_reducer",
  initialState,
  reducers: {
    changePerPageQuantity: (state, action) => {
      state.shopCategory.perpage = action.payload.data;
    },
    sortProduct: (state, action) => {
      state.shopCategory.sortBy = action.payload.data;
    },
    searchProduct: (state, action) => {
      state.shopCategory.searchResult = action.payload.data;
    },
    selectViewState: (state, action) => {
      state.shopCategory.viewState = action.payload.data;
    },
    addToListProductBrand: (state, action) => {
      // state[action.payload.page]["listProductBrand"] = action.payload.data; //data la 1 array chua cac brand dang check
    },

    handleDiscountOffers: (state, action) => {},
  },
});

export default ReducerSlice.reducer;
export const {
  changePerPageQuantity,
  sortProduct,
  searchProduct,
  selectViewState,
  addToListProductBrand,
} = ReducerSlice.actions;
