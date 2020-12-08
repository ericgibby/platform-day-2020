import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionsObservable, ofType, StateObservable } from 'redux-observable';
import { of } from 'rxjs';
import {
	catchError,
	distinctUntilChanged,
	map,
	skipWhile,
	switchMap,
	takeUntil,
	withLatestFrom
} from 'rxjs/operators';
import { serviceWithState } from '../../services/api-service';
import { messagesService } from '../../services/messages-service';
import { MessageStatus } from '../../types/messageStatus';

interface MessagesState {
	status: MessageStatus;
	message?: string;
}

// Slice
const {
	actions: { cancel, setMessage, setStatus },
	name,
	reducer
} = createSlice({
	name: 'messages',
	initialState: { status: MessageStatus.NotReady } as MessagesState,
	reducers: {
		cancel: state => {
			state.status = MessageStatus.Canceled;
		},
		setMessage: (state, { payload }: PayloadAction<string>) => {
			state.status = MessageStatus.Loaded;
			state.message = payload;
		},
		setStatus: (state, { payload }: PayloadAction<MessageStatus>) => {
			state.status = payload;
		}
	}
});

// Reducer
export default reducer;
export { name };
export { cancel, load, setStatus };

// Action creators
const load = createAction('messages/load');

// Epics
export function loadMessageEpic(
	action$: ActionsObservable<PayloadAction<string>>,
	state$: StateObservable<{ [name]: MessagesState }>
) {
	return action$.pipe(
		ofType(load.type),
		switchMap(action =>
			state$.pipe(
				skipWhile(
					({ [name]: { status } }) => status === MessageStatus.NotReady
				),
				map(() => action),
				distinctUntilChanged()
			)
		),
		withLatestFrom(state$),
		switchMap(([_, state]) =>
			serviceWithState(messagesService, state)
				.getMessage()
				.pipe(
					takeUntil(action$.pipe(ofType(cancel.type))),
					map(message => setMessage(message)),
					catchError(err => {
						console.error(err);
						return of(setStatus(MessageStatus.Error));
					})
				)
		)
	);
}
