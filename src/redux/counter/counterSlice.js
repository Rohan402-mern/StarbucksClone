import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    search: false,
    active:'home',
    slide:0,
    giftSwitch:'featured',
    showModel:false,
    emaildata:"",
    passdata:"",
    orderSwitch:'Bestseller',
    suborderSwitch:'Espresso',
    selectedProduct:{},
  },
  reducers: {
    isSearch: (state) => {
      state.search = !state.search
    },
    barChange:(state,action)=>{
        state.active = action.payload
    },
    indexChange:(state,action)=>{
      state.slide = action.payload
    },
     giftChange:(state,action)=>{
        state.giftSwitch = action.payload
    },
    ModelChange: (state,action) => {
      state.showModel = action.payload
    },
    emailChange: (state,action) => {
      state.emaildata = action.payload
    },
    passChange: (state,action) => {
      state.passdata = action.payload
    },
    orderChange:(state,action)=>{
        state.orderSwitch = action.payload
    },
    suborderChange:(state,action)=>{
        state.suborderSwitch = action.payload
    },
    SetSelectedProduct:(state,action)=>{
      state.selectedProduct = action.payload
    }
  },
})

export const { isSearch,barChange,indexChange,giftChange,ModelChange,emailChange,passChange,orderChange,suborderChange,SetSelectedProduct } = counterSlice.actions

export default counterSlice.reducer