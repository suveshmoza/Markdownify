import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface markdownState {
	value: string;
}

const initialState: markdownState = {
	value: '',
};

export const markdownSlice = createSlice({
	name: 'markdown',
	initialState,
	reducers: {
		updateValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { updateValue } = markdownSlice.actions;
export default markdownSlice.reducer;
