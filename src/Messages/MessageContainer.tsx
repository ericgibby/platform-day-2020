import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cancel, load, setStatus } from '../redux/modules/messages';
import {
	selectMessage,
	selectStatus
} from '../redux/modules/messages.selectors';
import { MessageStatus } from '../types/messageStatus';
import { Message } from './Message';

export const MessageContainer: FC<{}> = () => {
	const dispatch = useDispatch();
	const message = useSelector(selectMessage);
	const status = useSelector(selectStatus);

	useEffect(() => {
		dispatch(load());

		return () => dispatch(cancel());
	}, [dispatch]);

	const handleReady = () => dispatch(setStatus(MessageStatus.Ready));

	return <Message message={message} onReady={handleReady} status={status} />;
};
