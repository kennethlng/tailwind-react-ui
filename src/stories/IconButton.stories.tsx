import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButtonComponent from '../components/IconButton';
import Badge from '../components/Badge';
import * as AvailableIcons from '@talkmore-inc/nomadic-icons';
import { useState } from 'react';
import React from 'react';

export default {
  title: 'Components/Icon Button',
  component: IconButtonComponent,
  argTypes: {
    iconName: {
      options: Object.keys(AvailableIcons),
      control: { type: 'select' },
    },
    size: {
      options: [
        'px12',
        'px24',
        'px28',
        'px32',
        'px36',
        'px40',
        'px48',
        'px56',
        'px64',
        'px80',
        'px96',
        'px112',
        'px128',
      ],
      control: { type: 'select' },
    },
    color: {
      options: ['primary', 'secondary', 'tertiary', 'error'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButtonComponent> = (args) => (
  <IconButtonComponent {...args} />
);

export const IconButton = Template.bind({});

IconButton.args = {
  iconName: 'AlarmActiveIcon',
  disabled: false,
  label: 'Alarm',
  color: 'primary',
  fullWidth: false,
};

export const Toolbar = () => {
  const [muted, setMuted] = useState(false);
  const [sharingScreen, setSharingScreen] = useState(false);
  return (
    <div className="grid grid-cols-3 rounded-md shadow-md">
      <Badge
        content={
          <div className="inline-flex justify-center rounded-md bg-white text-black hover:bg-black hover:text-white">
            <IconButton iconName="ChevronUpDefaultIcon" size="px12" />
          </div>
        }
        position={{
          vertical: 'top',
          horizontal: 'right',
        }}
        badgeClassName="mr-3"
      >
        <IconButtonComponent
          label={muted ? 'unmute' : 'mute'}
          onClick={() => setMuted(!muted)}
          className="w-20"
        >
          <AvailableIcons.AlarmActiveIcon />
        </IconButtonComponent>
      </Badge>
      <IconButtonComponent
        label={sharingScreen ? 'stop share' : 'share'}
        className="w-20"
        onClick={() => setSharingScreen(!sharingScreen)}
      >
        {sharingScreen ? (
          <AvailableIcons.ShareScreenActiveIcon />
        ) : (
          <AvailableIcons.ShareScreenDefaultIcon />
        )}
      </IconButtonComponent>
    </div>
  );
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  disabled: false,
  label: 'No iconName set',
  color: 'primary',
  fullWidth: false,
  children: (
    <AvailableIcons.AlarmActiveIcon style={{ width: 48, height: 48 }} />
  ),
};
