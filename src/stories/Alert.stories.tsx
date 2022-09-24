import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowRightActiveIcon } from '@talkmore-inc/nomadic-icons';
import React from 'react';
import Alert from '../components/Alert';
import Button from '../components/Button';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    color: {
      options: ['success', 'error', 'warning', 'info'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  color: 'info',
  children:
    'A new software update is available. See what’s new in version 2.0.4.',
  action: (
    <Button
      variant="text"
      color="inherit"
      endIcon={<ArrowRightActiveIcon className="h-5 w-5" />}
    >
      Upgrade
    </Button>
  ),
};
