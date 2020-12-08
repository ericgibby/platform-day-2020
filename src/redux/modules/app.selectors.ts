import { RootStateOrAny } from 'react-redux';

export function selectAccessToken(state: RootStateOrAny) {
	return state.app.accessToken as string;
}

export function selectEnvironment(state: RootStateOrAny) {
	return state.app.environment as 'development' | 'test' | 'rc' | 'production';
}
