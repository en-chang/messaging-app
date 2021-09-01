import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open: false,
}

export const modalSlice = createSlice({
  name: 'modalOpen',
  initialState,
  reducers: {
    isOpen: (state) => {
      state.value = true
    },
    isClosed: (state) => {
      state.value = false
    },
  },
})

export const { isOpen, isClosed } = modalSlice.actions

export default modalSlice.reducer