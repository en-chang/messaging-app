import { configureStore } from '@reduxjs/toolkit'
import tabsReducer from './components/Tabs/navTabs'

export const store = configureStore({
  reducer: {
    tab: tabsReducer
  },
})