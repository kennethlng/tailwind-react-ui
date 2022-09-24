import { ComponentMeta } from '@storybook/react';
import {
  AlarmDisabledDefaultIcon,
  ChevronDownActiveIcon,
  PhoneEndDefaultIcon,
  SurveyActiveIcon,
  VideoDefaultIcon,
} from '@talkmore-inc/nomadic-icons';
import React, { useState } from 'react';
import List from '../components/List';
import Avatar from '../components/Avatar';
import Button from '../components/Button';
import AvatarGroup from '../components/AvatarGroup';
import IconButton from '../components/IconButton';

export default {
  title: 'Components/Lists',
  component: List,
} as ComponentMeta<typeof List>;

const listItems = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: AlarmDisabledDefaultIcon,
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: VideoDefaultIcon,
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: SurveyActiveIcon,
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    icon: PhoneEndDefaultIcon,
  },
];

export const Basic = () => (
  <List>
    <List.Subheader
      secondaryAction={
        <IconButton>
          <ChevronDownActiveIcon className="h-5 w-5" />
        </IconButton>
      }
    >
      Header
    </List.Subheader>
    {listItems.map((item) => (
      <List.Item key={item.name}>
        <List.Item.Text primary={item.name} secondary={item.handle} />
      </List.Item>
    ))}
  </List>
);

export const WithAvatar = () => (
  <List>
    <List.Subheader
      secondaryAction={
        <IconButton>
          <ChevronDownActiveIcon className="h-5 w-5" />
        </IconButton>
      }
    >
      Header
    </List.Subheader>
    {listItems.map((item) => (
      <List.Item key={item.name}>
        <List.Item.Avatar>
          <Avatar src={item.imageUrl} />
        </List.Item.Avatar>
        <List.Item.Text primary={item.name} secondary={item.handle} />
      </List.Item>
    ))}
  </List>
);

export const WithIcon = () => (
  <List>
    <List.Subheader
      secondaryAction={
        <IconButton>
          <ChevronDownActiveIcon className="h-5 w-5" />
        </IconButton>
      }
    >
      Header
    </List.Subheader>
    {listItems.map((item) => (
      <List.Item key={item.name}>
        <List.Item.Icon>
          <item.icon />
        </List.Item.Icon>
        <List.Item.Text primary={item.name} secondary={item.handle} />
      </List.Item>
    ))}
  </List>
);

export const WithAction = () => (
  <List>
    <List.Subheader
      secondaryAction={
        <IconButton>
          <ChevronDownActiveIcon className="h-5 w-5" />
        </IconButton>
      }
    >
      Header
    </List.Subheader>
    {listItems.map((item) => (
      <List.Item
        key={item.name}
        secondaryAction={
          <Button variant="filled" color="tertiary">
            View
          </Button>
        }
      >
        <List.Item.Avatar>
          <Avatar src={item.imageUrl} />
        </List.Item.Avatar>
        <List.Item.Text primary={item.name} secondary={item.handle} />
      </List.Item>
    ))}
  </List>
);

export const WithNonstringValues = () => (
  <List>
    <List.Subheader
      secondaryAction={
        <IconButton>
          <ChevronDownActiveIcon className="h-5 w-5" />
        </IconButton>
      }
    >
      Header
    </List.Subheader>
    {listItems.map((rootItem) => (
      <List.Item secondaryAction={<Button variant="filled">Join</Button>}>
        <List.Item.Text
          primary={rootItem.name}
          secondary={
            <AvatarGroup avatarProps={{ size: 'px24' }}>
              {listItems.map((item) => (
                <Avatar src={item.imageUrl} />
              ))}
            </AvatarGroup>
          }
        />
      </List.Item>
    ))}
  </List>
);

export const AsButtons = () => {
  const [selectedKey, setSelectedKey] = useState(listItems[0].name);

  return (
    <List>
      <List.Subheader
        secondaryAction={
          <IconButton>
            <ChevronDownActiveIcon className="h-5 w-5" />
          </IconButton>
        }
      >
        Header
      </List.Subheader>
      {listItems.map((item) => (
        <List.Item
          key={item.name}
          secondaryAction={
            <Button variant="filled" color="tertiary">
              View
            </Button>
          }
          disablePadding
          disableGutters
        >
          <List.Item.Button
            onClick={() => setSelectedKey(item.name)}
            selected={item.name === selectedKey}
          >
            <List.Item.Avatar>
              <Avatar src={item.imageUrl} />
            </List.Item.Avatar>
            <List.Item.Text primary={item.name} secondary={item.handle} />
          </List.Item.Button>
        </List.Item>
      ))}
    </List>
  );
};
