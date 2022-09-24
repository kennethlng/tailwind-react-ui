import { ComponentStory, ComponentMeta } from '@storybook/react';
import GoogleSignInButton from '../components/GoogleSignInButton';

export default {
  title: 'Components/GoogleSignInButton',
  component: GoogleSignInButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof GoogleSignInButton>;

const Template: ComponentStory<typeof GoogleSignInButton> = (args) => (
  <div style={{ width: 200 }}>
    <GoogleSignInButton {...args} />
  </div>
);

export const Demo = Template.bind({});
Demo.args = {
  disabled: false,
};
