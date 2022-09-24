import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrosoftSignInButton from '../components/MicrosoftSignInButton';

export default {
  title: 'Components/MicrosoftSignInButton',
  component: MicrosoftSignInButton,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
    color: {
      control: {
        type: 'radio',
        options: ['light', 'dark'],
      },
    },
  },
} as ComponentMeta<typeof MicrosoftSignInButton>;

const Template: ComponentStory<typeof MicrosoftSignInButton> = (args) => (
  <div style={{ width: 200 }}>
    <MicrosoftSignInButton {...args} />
  </div>
);

export const Demo = Template.bind({});
Demo.args = {
  disabled: false,
  color: 'dark',
};
