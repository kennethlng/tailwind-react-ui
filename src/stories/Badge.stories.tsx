import { ComponentMeta, ComponentStory } from '@storybook/react';
import Avatar from '../components/Avatar';
import BadgeComponent from '../components/Badge';
import React from 'react';
import usoppHeadshot from './assets/usopp.png';

import {
  AddUserActiveIcon,
  AlarmActiveIcon,
} from '@talkmore-inc/nomadic-icons';

export default {
  title: 'Components/Badge',
  component: BadgeComponent,
  argTypes: {
    invisible: {
      control: { type: 'boolean' },
    },
    verticalPosition: {
      control: {
        options: ['top', 'bottom'],
        type: 'radio',
      },
    },
    horizontalPosition: {
      control: {
        options: ['right', 'left'],
        type: 'radio',
      },
    },
  },
} as ComponentMeta<typeof BadgeComponent>;

const ContentBackground = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: 4, backgroundColor: 'greenyellow', borderRadius: 50 }}>
    {children}
  </div>
);

const Template: ComponentStory<typeof BadgeComponent> = (args: any) => {
  const { verticalPosition, horizontalPosition } = args;
  return (
    <BadgeComponent
      {...args}
      position={{
        vertical: verticalPosition,
        horizontal: horizontalPosition,
      }}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {
  children: <Avatar src={usoppHeadshot} size="px56" />,
  content: (
    <ContentBackground>
      <AddUserActiveIcon className="h-2 w-2" />
    </ContentBackground>
  ),
  invisible: false,
  verticalPosition: 'top',
  horizontalPosition: 'right',
};

export const Multiple = Template.bind({});
Multiple.args = {
  children: (
    <BadgeComponent
      position={{ vertical: 'bottom', horizontal: 'left' }}
      content={
        <ContentBackground>
          <AlarmActiveIcon className="h-2 w-2" />
        </ContentBackground>
      }
    >
      <Avatar src={usoppHeadshot} size="px56" />
    </BadgeComponent>
  ),
  content: (
    <ContentBackground>
      <AddUserActiveIcon className="h-10 w-10" />
    </ContentBackground>
  ),
  invisible: false,
  verticalPosition: 'top',
  horizontalPosition: 'right',
};
