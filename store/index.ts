import { configureStore } from '@reduxjs/toolkit'

import awardReducer from "@store/slices/award.slice"

export const store = configureStore({
    reducer: {
        award: awardReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch