import React, { FC, SyntheticEvent } from 'react';

export interface MyPresentationalComponentProps {
	count: number;
	onDecrement: (event: SyntheticEvent<HTMLButtonElement>) => void;
	onIncrement: (event: SyntheticEvent<HTMLButtonElement>) => void;
}

export const MyPresentationalComponent: FC<MyPresentationalComponentProps> = ({
	count,
	onDecrement,
	onIncrement
}) => (
	<div>
		<button onClick={onDecrement}>-</button>
		<span>{count}</span>
		<button onClick={onIncrement}>+</button>
	</div>
);
