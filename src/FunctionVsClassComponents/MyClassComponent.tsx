import React, { Component } from 'react';
import { MyComponentProps } from './MyComponentProps';

interface MyClassComponentState {
	count: number;
	counter?: NodeJS.Timeout;
}

export class MyClassComponent extends Component<
	MyComponentProps,
	MyClassComponentState
> {
	constructor(props: MyComponentProps) {
		super(props);
		this.state = { count: 0 };
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount() {
		const counter = setInterval(() => {
			this.setState(({ count }) => ({ count: count + 1 }));
		}, 1000);
		this.setState({ counter });
	}

	componentWillUnmount() {
		const { counter } = this.state;
		if (counter) {
			clearInterval(counter);
		}
	}

	handleClick() {
		this.setState(({ count }) => ({ count: count + 1 }));
	}

	render() {
		const { count } = this.state;
		return (
			<div>
				<span>{count}</span>
				<button onClick={this.handleClick}>+</button>
			</div>
		);
	}
}
