import { configureStore } from '@reduxjs/toolkit'
import tabsReducer from './components/Tabs/tabSlice'
import modalReducer from './components/Modal/modalSlice'

export const store = configureStore({
  reducer: {
    tab: tabsReducer,
    modalOpen: modalReducer,
  },
})