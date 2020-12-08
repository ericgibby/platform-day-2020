import React, { FC, useMemo } from 'react';
import { MessageStatus } from '../types/messageStatus';

export interface MessageProps {
	message?: string;
	status?: MessageStatus;
	onReady?(): void;
}

export const Message: FC<MessageProps> = ({ message, onReady, status }) => {
	const text = useMemo(() => {
		switch (status) {
			case MessageStatus.Loading:
				return 'Loading...';
			case MessageStatus.Error:
				return 'Oopsies!';
			case MessageStatus.Loaded:
				return `Message: ${message ?? '(none)'}`;
			default:
				return undefined;
		}
	}, [message, status]);

	return (
		<div>
			{status === MessageStatus.NotReady && (
				<button onClick={onReady}>Go!</button>
			)}
			{text}
		</div>
	);
};
