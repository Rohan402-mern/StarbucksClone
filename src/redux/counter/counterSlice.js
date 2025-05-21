import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    search: false,
    active:'home',
    slide:0,
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
    }
  },
})

export const { isSearch,barChange,indexChange } = counterSlice.actions

export default counterSlice.reducer