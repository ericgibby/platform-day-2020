import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { MessageContainer } from './MessageContainer';

const meta: Meta = {
	title: 'Message Container',
	component: MessageContainer
};

export default meta;

const Template: Story<{}> = args => (
	<Provider store={store}>
		<MessageContainer {...args} />
	</Provider>
);

export const Default = Template.bind({});
