import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlarmActiveIcon, CheckDefaultIcon } from '@talkmore-inc/nomadic-icons';
import React from 'react';
import ButtonComponent from '../components/Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['filled', 'outlined', 'text'],
      control: { type: 'radio' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    width: {
      options: ['default', 'full'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
  parameters: {
    componentSubtitle: 'Button component',
  },
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <div style={{ width: 200 }}>
    <ButtonComponent {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  variant: 'filled',
  width: 'default',
  size: 'medium',
  color: 'primary',
  disabled: false,
  children: 'Button',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  variant: 'filled',
  width: 'default',
  size: 'medium',
  color: 'primary',
  disabled: false,
  children: 'Button',
  startIcon: <AlarmActiveIcon className="h-7 w-7" />,
  endIcon: <CheckDefaultIcon className="h-4 w-4" />,
};
