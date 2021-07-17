import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user:null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state,action) => {
        // console.log(action.payload)
        // if(!action.payload===undefined){
        //     console.log('i happen')
        // }
        state.user = action.payload
    },
    removeUser: (state) => {
      state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser,removeUser } = authSlice.actions

export default authSlice.reducer