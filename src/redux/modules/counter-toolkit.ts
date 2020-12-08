import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './counter-state';

// Slice
const {
	actions: { decrement, increment },
	reducer
} = createSlice({
	name: 'counter',
	initialState: { count: 0 } as CounterState,
	reducers: {
		decrement: state => {
			state.count--;
		},
		increment: state => {
			state.count++;
		}
	}
});

// Reducer
export default reducer;

// Action creators
export { decrement, increment };
