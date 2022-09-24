import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Paper from '../components/Paper';

export default {
  title: 'Components/Paper',
  component: Paper,
} as ComponentMeta<typeof Paper>;

const Template: ComponentStory<typeof Paper> = (args) => <Paper {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  children: <div className="h-24 w-18" />,
};
