import React, { FC, SyntheticEvent, useState } from 'react';
import { MyPresentationalComponent } from './MyPresentationalComponent';

export interface MyContainerComponentProps {
	initialCount?: number;
}

export const MyContainerComponent: FC<MyContainerComponentProps> = ({
	initialCount = 0
}) => {
	const [count, setCount] = useState(initialCount);

	const handleDecrement = (_: SyntheticEvent<HTMLButtonElement>) => {
		setCount(current => current - 1);
	};

	const handleIncrement = (_: SyntheticEvent<HTMLButtonElement>) => {
		setCount(current => current + 1);
	};

	return (
		<MyPresentationalComponent
			count={count}
			onDecrement={handleDecrement}
			onIncrement={handleIncrement}
		/>
	);
};
