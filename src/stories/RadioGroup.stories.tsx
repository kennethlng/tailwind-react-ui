import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import RadioGroup from '../components/RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof RadioGroup>;

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
];

const Template: ComponentStory<typeof RadioGroup> = (args) => {
  const [value, setValue] = useState(plans[0]);

  return (
    <RadioGroup {...args} value={value} onChange={setValue}>
      {plans.map((plan) => (
        <RadioGroup.Option key={plan.name} value={plan}>
          {plan.name}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export const Demo = Template.bind({});
Demo.args = {
  disabled: false,
  fullWidth: false,
  label: 'Plans',
  description: 'How do you prefer to receive notifications?',
  helperText: 'Pick something',
};
