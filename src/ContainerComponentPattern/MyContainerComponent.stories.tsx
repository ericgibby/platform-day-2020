import React from 'react';
import { Meta, Story } from '@storybook/react';
import {
	MyContainerComponent,
	MyContainerComponentProps
} from './MyContainerComponent';

const meta: Meta = {
	title: 'Container Component',
	component: MyContainerComponent
};

export default meta;

const Template: Story<MyContainerComponentProps> = args => (
	<MyContainerComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
	initialCount: 10
};
