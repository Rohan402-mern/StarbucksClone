import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    search: false,
    active:'home',

  },
  reducers: {
    isSearch: (state) => {
      state.search = !state.search
    },
    barChange:(state,action)=>{
        state.active = action.payload
    }
  },
})

export const { isSearch,barChange } = counterSlice.actions

export default counterSlice.reducer