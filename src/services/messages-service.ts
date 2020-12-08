import { range, timer, zip } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { map, mergeMap, retryWhen, switchMap } from 'rxjs/operators';
import { ApiConfig } from './api-service';

class MessagesService {
	private config: ApiConfig;

	constructor(config: ApiConfig) {
		this.config = config;
	}

	getMessage() {
		const headers: HeadersInit = {};
		if (this.config.accessToken) {
			headers['Authorization'] = `Bearer ${this.config.accessToken}`;
		}
		return fromFetch(this.config.urls.messages, { headers }).pipe(
			retryWhen(errors$ =>
				zip(range(0, 3), errors$).pipe(
					mergeMap(([attempt]) => timer(attempt * 1000))
				)
			),
			switchMap(async response => {
				if (response.ok) {
					return response.json();
				}
				const text = await response.text();
				throw new Error(text);
			}),
			map(({ message }) => message)
		);
	}
}

export function messagesService(config: ApiConfig) {
	return new MessagesService(config);
}
