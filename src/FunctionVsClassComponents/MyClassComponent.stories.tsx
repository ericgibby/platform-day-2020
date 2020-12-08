import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MyClassComponent } from './MyClassComponent';
import { MyComponentProps } from './MyComponentProps';

const meta: Meta = {
	title: 'Class Component',
	component: MyClassComponent
};

export default meta;

const Template: Story<MyComponentProps> = args => (
	<MyClassComponent {...args} />
);

export const Default = Template.bind({});
