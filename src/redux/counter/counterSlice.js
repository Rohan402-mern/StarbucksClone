import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    search: false,
    active:'home',
    slide:0,
    giftSwitch:'featured',
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
  },
})

export const { isSearch,barChange,indexChange,giftChange } = counterSlice.actions

export default counterSlice.reducer