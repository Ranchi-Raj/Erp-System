import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  user :{
    name : 'Adit',
    username : 'kjkj',
    dob : '20-02-2005',
    password : '56585',
    id : 1,
    tasks : []
  },
  sidebar : 0
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    addSidebar : (state, action) => {
      state.sidebar = action.payload
    },
    addTasks : (state, action) => {
      state.user.tasks = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const {addUser, addSidebar, addTasks } = userSlice.actions

export default userSlice.reducer