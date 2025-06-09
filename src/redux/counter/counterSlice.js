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
    selectedGift:{},
    yes:'',
    size:'tall',
  selectedProps: {
    MILK: 'Skimmed Milk',
    'NON-DAIRY ALTERNATIVES': 'Soy',
    'CHOICE OF ESPRESSO': 'Extra Shot',
    Ice: 'No Ice',
    TEMPERATURE:'Kids Hot',
  },
  cart:[],

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
    },
    SetSelectedGift:(state,action)=>{
      state.selectedGift = action.payload
    },
    isYes: (state,action) => {
      state.yes = action.payload
    },
    sizeChange:(state,action)=>{
      state.size = action.payload
    },
     propChange:(state,action)=>{
      const {group,value} =action.payload
      state.selectedProps[group] = value;
    },
    AddToCart:(state,action)=>{
      const product = action.payload
      const existingProduct = state.cart.find(item => item.id === product.id)
      if(existingProduct){
        existingProduct.quantity +=1;
      }
      else{
        state.cart.push({...product,quantity:1})
      }

    },
    IncrementCart:(state,action)=>{
      const existingProduct = state.cart.find(item=> item.id === action.payload.id)
      if(existingProduct) existingProduct.quantity +=1; 
    },
    DecrementCart:(state,action)=>{
       const existingProduct = state.cart.find(item=> item.id === action.payload.id)
       if(existingProduct){
        if(existingProduct.quantity>1){
           existingProduct.quantity-=1;
        }
       else{
        state.cart = state.cart.filter(item=> item.id !== action.payload.id)
       }
       }
       
    }
  },
})

export const { isSearch,barChange,indexChange,giftChange,ModelChange,emailChange,passChange,orderChange,suborderChange,SetSelectedProduct,SetSelectedGift,isYes,sizeChange,propChange,AddToCart,IncrementCart,DecrementCart } = counterSlice.actions

export default counterSlice.reducer