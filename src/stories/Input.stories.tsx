import {
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Input from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  placeholder: 'Email',
  error: false,
  disabled: false,
  required: false,
};

export const WithStartAdornment = Template.bind({});
WithStartAdornment.args = {
  placeholder: 'Input your name here',
  startAdornment: (
    <Input.Adornment position="start">
      <InformationCircleIcon className="h-5 w-5" />
    </Input.Adornment>
  ),
  error: false,
  disabled: false,
  required: false,
};

export const WithEndAdornment = Template.bind({});
WithEndAdornment.args = {
  placeholder: 'Input your name here',
  endAdornment: (
    <Input.Adornment position="end">
      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
    </Input.Adornment>
  ),
  error: false,
  disabled: false,
  required: false,
};
