import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import DialogComponent from '../components/Dialog';
import Typography from '../components/Typography';
import Button from '../components/Button';

export default {
  title: 'Components/Dialog',
  component: DialogComponent,
  argTypes: {
    width: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'radio' },
    },
    padding: {
      control: { type: 'boolean' },
    },
    fullScreen: {
      control: { type: 'boolean' },
    },
    fullHeight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof DialogComponent>;

const Template: ComponentStory<typeof DialogComponent> = (args) => (
  <DialogComponent open {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  width: 'sm',
  title: 'Payment successful',
  children: (
    <Typography>
      Your payment has been successfully submitted. We’ve sent you an email with
      all of the details of your order.
    </Typography>
  ),
  padding: true,
  fullScreen: false,
  fullHeight: false,
};

export const WithActions = Template.bind({});
WithActions.args = {
  width: 'sm',
  title: 'Payment successful',
  children: (
    <>
      <DialogComponent.Title>Perform some actions</DialogComponent.Title>
      <DialogComponent.Content>
        <Typography>
          Your payment has been successfully submitted. We’ve sent you an email
          with all of the details of your order.
        </Typography>
      </DialogComponent.Content>
      <DialogComponent.Footer>
        <Button color="secondary">Cancel</Button>
        <Button>Submit</Button>
      </DialogComponent.Footer>
    </>
  ),
  padding: true,
  fullScreen: false,
  fullHeight: false,
};

export const Overflow = Template.bind({});
Overflow.args = {
  width: 'sm',
  title: 'Payment successful',
  children: (
    <>
      <DialogComponent.Title>Title of stuff</DialogComponent.Title>
      <DialogComponent.Content>
        <div className="space-y-32">
          <Typography>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Typography>
          <Typography>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Typography>
          <Typography>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Typography>
          <Typography>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Typography>
          <Typography>
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </Typography>
        </div>
      </DialogComponent.Content>
    </>
  ),
  primaryAction: { label: 'Save' },
  secondaryAction: { label: 'Cancel' },
  padding: true,
  fullScreen: false,
  fullHeight: false,
};

export const ControlledByButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Knock knock</Button>
      <DialogComponent open={open} onClose={setOpen} width="sm">
        <DialogComponent.Content>
          <p>Yoda Lady</p>
          <p>Yoda Lady who?</p>
        </DialogComponent.Content>
      </DialogComponent>
    </>
  );
};
