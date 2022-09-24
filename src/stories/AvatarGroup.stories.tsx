import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarGroupComponent from '../components/AvatarGroup';
import Avatar from '../components/Avatar';
import Tooltip from '../components/Tooltip';
import luffyHeadshot from './assets/luffy.png';
import zoloHeadshot from './assets/zolo.png';
import namiHeadshot from './assets/nami.png';
import usoppHeadshot from './assets/usopp.png';
import sanjiHeadshot from './assets/sanji.png';
import chopperHeadshot from './assets/chopper.png';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroupComponent,
  argTypes: {
    max: {
      control: { type: 'number' },
    },
    extraTooltip: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof AvatarGroupComponent>;

const users = [
  {
    id: '1',
    imageSrc: luffyHeadshot,
    displayName: 'Monkey D. Luffy',
  },
  {
    id: '2',
    imageSrc: zoloHeadshot,
    displayName: 'Roronoa Zolo',
  },
  {
    id: '3',
    imageSrc: namiHeadshot,
    displayName: 'Nami',
  },
  {
    id: '4',
    imageSrc: usoppHeadshot,
    displayName: 'Usopp',
  },
  {
    id: '5',
    imageSrc: sanjiHeadshot,
    displayName: 'Sanji',
  },
  {
    id: '6',
    imageSrc: chopperHeadshot,
    displayName: 'Tony Tony Chopper',
  },
];

const Template: ComponentStory<typeof AvatarGroupComponent> = (args: any) => (
  <AvatarGroupComponent {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  max: 5,
  children: users.map((user) => (
    <Avatar
      key={user.id}
      imageSrc={user.imageSrc}
      displayName={user.displayName}
      alt={user.displayName}
    />
  )),
  avatarProps: {
    size: 'px64',
    shadow: true,
    border: true,
  },
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  max: 5,
  children: users.map((user) => (
    <Tooltip key={user.id} text={user.displayName}>
      <Avatar
        imageSrc={user.imageSrc}
        displayName={user.displayName}
        alt={user.displayName}
      />
    </Tooltip>
  )),
  extraTooltip: users
    .slice(4)
    .map((user) => user.displayName)
    .join(', '),
  avatarProps: {
    size: 'px64',
    shadow: true,
    border: true,
  },
};

export const NoAvatars = Template.bind({});
NoAvatars.args = {
  children: null,
};
