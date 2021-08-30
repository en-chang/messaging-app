import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nav: 'inbox',
}

export const navTabs = createSlice({
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

export const { inbox, sent, compose } = navTabs.actions

export default navTabs.reducer