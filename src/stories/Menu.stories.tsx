import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import List from '../components/List';
import Menu from '../components/Menu';
import Avatar from '../components/Avatar';
import {
  CalendarDaysIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  ScissorsIcon,
  VideoCameraIcon,
} from '@heroicons/react/20/solid';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {
    placement: {
      options: [
        'top',
        'top-end',
        'top-start',
        'bottom',
        'bottom-end',
        'bottom-start',
        'right',
        'right-end',
        'right-start',
        'left',
        'left-end',
        'left-start',
      ],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Menu>;

const items = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: ScissorsIcon,
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: VideoCameraIcon,
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: ChartBarIcon,
  },
];

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placement: 'bottom-start',
  children: (
    <Menu.IconButton>
      <CalendarDaysIcon className="h-8 w-8" />
    </Menu.IconButton>
  ),
  items: (
    <>
      {items.map((item) => (
        <Menu.Item key={item.name}>
          <List.Item.Text primary={item.name} secondary={item.handle} />
        </Menu.Item>
      ))}
    </>
  ),
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  placement: 'bottom-start',
  children: (
    <Menu.IconButton>
      <CalendarDaysIcon className="h-8 w-8" />
    </Menu.IconButton>
  ),
  items: (
    <>
      {items.map((item) => (
        <Menu.Item key={item.name}>
          <List.Item.Avatar>
            <Avatar src={item.imageUrl} />
          </List.Item.Avatar>
          <List.Item.Text primary={item.name} secondary={item.handle} />
        </Menu.Item>
      ))}
    </>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placement: 'bottom-start',
  children: (
    <Menu.IconButton>
      <CalendarDaysIcon className="h-8 w-8" />
    </Menu.IconButton>
  ),
  items: (
    <>
      {items.map((item) => (
        <Menu.Item key={item.name}>
          <List.Item.Icon>
            <item.icon className="h-10 w-10" />
          </List.Item.Icon>
          <List.Item.Text primary={item.name} secondary={item.handle} />
        </Menu.Item>
      ))}
    </>
  ),
};
