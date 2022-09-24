import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Switch from '../components/Switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false);

  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Demo = Template.bind({});
Demo.args = {
  label: 'Available to hire',
  description:
    'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
  fullWidth: false,
  disabled: false,
};
