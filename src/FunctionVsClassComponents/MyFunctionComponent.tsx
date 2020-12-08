import React, { FC, useEffect, useState } from 'react';
import { MyComponentProps } from './MyComponentProps';

export const MyFunctionComponent: FC<MyComponentProps> = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const counter = setInterval(() => {
			setCount(prevCount => prevCount + 1);
		}, 1000);
		return () => {
			clearInterval(counter);
		};
	}, []);

	return (
		<div>
			<span>{count}</span>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
		</div>
	);
};
