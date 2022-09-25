import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import Avatar from '../components/Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  alt: 'Tim Apple',
  size: 'md',
};
