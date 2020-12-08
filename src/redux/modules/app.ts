import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
	accessToken?: string;
	environment?: string;
}

const {
	actions: { setAccessToken, setEnvironment },
	reducer
} = createSlice({
	name: 'app',
	initialState: { environment: 'development' } as AppState,
	reducers: {
		setAccessToken: (state, { payload }: PayloadAction<string | undefined>) => {
			state.accessToken = payload;
		},
		setEnvironment: (
			state,
			{ payload }: PayloadAction<'development' | 'test' | 'rc' | 'production'>
		) => {
			state.environment = payload;
		}
	}
});

export default reducer;
export { setAccessToken, setEnvironment };
