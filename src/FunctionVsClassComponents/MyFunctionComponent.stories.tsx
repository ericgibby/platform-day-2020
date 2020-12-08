import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MyFunctionComponent } from './MyFunctionComponent';
import { MyComponentProps } from './MyComponentProps';

const meta: Meta = {
	title: 'Function Component',
	component: MyFunctionComponent
};

export default meta;

const Template: Story<MyComponentProps> = args => (
	<MyFunctionComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
