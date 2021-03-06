import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nav: 'inbox',
}

export const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    inbox: (state) => {
      state.value = 'inbox'
    },
    sent: (state) => {
      state.value = 'sent'
    },
    compose: (state) => {
      state.value = 'compose'
    },
  }
})

export const { inbox, sent, compose } = tabSlice.actions

export default tabSlice.reducer