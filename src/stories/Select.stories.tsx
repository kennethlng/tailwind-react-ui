import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Select from '../components/Select';

const people = [
  'Wade Cooper',
  'Arlene Mccoy',
  'Devon Webb',
  'Tanya Fox',
  'Caroline Schultz',
];

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = useState(people[0]);

  return <Select {...args} value={value} onChange={setValue} />;
};

export const Demo = Template.bind({});
Demo.args = {
  label: 'Hello',
  options: people,
  helperText: 'DOo doodo doo',
  fullWidth: true,
};
