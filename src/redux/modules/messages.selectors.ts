import { RootStateOrAny } from 'react-redux';
import { MessageStatus } from '../../types/messageStatus';

export function selectMessage(state: RootStateOrAny) {
	return state.messages.message as string;
}

export function selectStatus(state: RootStateOrAny) {
	return state.messages.status as MessageStatus;
}
