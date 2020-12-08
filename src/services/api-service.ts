import { RootStateOrAny } from 'react-redux';
import {
	selectAccessToken,
	selectEnvironment
} from '../redux/modules/app.selectors';
import { getUrls } from './urls-service';

export interface ApiConfig {
	accessToken?: string;
	urls: Record<string, string>;
}

export function serviceWithState<T>(
	serviceFactory: (config: ApiConfig) => T,
	state: RootStateOrAny
) {
	const environment = selectEnvironment(state);
	const urls = getUrls(environment);
	const accessToken = selectAccessToken(state);

	return serviceFactory({ accessToken, urls });
}
