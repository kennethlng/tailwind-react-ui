import { ComponentMeta, ComponentStory } from '@storybook/react';
import {
  AlarmDoneActiveIcon,
  ExitLeaveSignoutActiveIcon,
} from '@talkmore-inc/nomadic-icons';
import React from 'react';
import Input from '../components/Input';
import TextField from '../components/TextField';

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Demo = Template.bind({});
Demo.args = {
  label: 'Email',
  placeholder: 'Email',
  helperText: 'This is where you put your email ok just write it here',
  error: false,
  disabled: false,
  required: false,
};

export const WithStartAdornment = Template.bind({});
WithStartAdornment.args = {
  placeholder: 'Input your name here',
  label: 'First name',
  startAdornment: (
    <Input.Adornment position="start">
      <ExitLeaveSignoutActiveIcon className="h-5 w-5" />
    </Input.Adornment>
  ),
  error: false,
  disabled: false,
  required: false,
};

export const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
  placeholder: 'Input your name here',
  label: 'Last name',
  endAdornment: (
    <Input.Adornment position="end">
      <AlarmDoneActiveIcon className="h-5 w-5 text-gray-400" />
    </Input.Adornment>
  ),
  error: false,
  disabled: false,
  required: false,
};
