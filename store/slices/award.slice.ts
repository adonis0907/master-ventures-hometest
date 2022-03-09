import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AwardedBallotInterface } from "@pages/awards"

export interface AwardState {
    items: Array<AwardedBallotInterface>
}

const initialState: AwardState = {
    items: []
}

export const awardSlice = createSlice({
    name: 'award',
    initialState,
    reducers: {
        submitAwards: (state, action: PayloadAction<AwardState>) => {
            state.items = [...action.payload.items];
        }
    }
});

export const { submitAwards } = awardSlice.actions;
export default awardSlice.reducer;