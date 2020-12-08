import { Action } from '@reduxjs/toolkit';
import { CounterState } from './counter-state';

// Actions
const DECREMENT = 'counter/DECREMENT';
const INCREMENT = 'counter/INCREMENT';

// Reducer
export default function reducer(
	state = { count: 0 } as CounterState,
	action = {} as Action
) {
	switch (action.type) {
		case DECREMENT: {
			let { count } = state;
			count--;
			return {
				...state,
				count
			};
		}
		case INCREMENT: {
			let { count } = state;
			count++;
			return {
				...state,
				count
			};
		}
		default:
			return state;
	}
}

// Action creators
export function decrement() {
	return { type: DECREMENT };
}

export function increment() {
	return { type: INCREMENT };
}
