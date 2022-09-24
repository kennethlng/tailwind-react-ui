import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Avatar from '../components/Avatar';
import Chip from '../components/Chip';
import IconButton from '../components/IconButton';
import {
  AlarmDefaultIcon,
  CloseCrossDefaultIcon,
} from '@talkmore-inc/nomadic-icons';

export default {
  title: 'Components/Chip',
  component: Chip,
  argTypes: {
    color: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  label: 'Hello',
};

export const WithSecondaryAction = Template.bind({});
WithSecondaryAction.args = {
  label: 'Secondary action',
  avatar: (
    <Avatar
      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="name"
      size="px24"
    />
  ),
  secondaryActionIcon: <CloseCrossDefaultIcon />,
  color: 'primary',
  disabled: false,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  avatar: (
    <Avatar
      src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
      alt="name"
      size="px24"
    />
  ),
  label: 'Avatar',
  color: 'primary',
  disabled: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <AlarmDefaultIcon />,
  label: 'Icon',
  color: 'primary',
  disabled: false,
};
