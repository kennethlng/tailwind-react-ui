import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarGroupGridComponent from '../components/AvatarGroupGrid';
import Avatar from '../components/Avatar';
import Tooltip from '../components/Tooltip';
import luffyHeadshot from './assets/luffy.png';
import zoloHeadshot from './assets/zolo.png';
import namiHeadshot from './assets/nami.png';
import usoppHeadshot from './assets/usopp.png';
import sanjiHeadshot from './assets/sanji.png';
import chopperHeadshot from './assets/chopper.png';

const colsOptions = [undefined, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const rowsOptions = [undefined, 1, 2, 3, 4, 5, 6];

export default {
  title: 'Components/AvatarGroupGrid',
  component: AvatarGroupGridComponent,
  argTypes: {
    max: {
      control: { type: 'number' },
    },
    extraTooltip: {
      control: { type: 'text' },
    },
    direction: {
      options: ['row', 'col'],
      control: { type: 'radio' },
    },
    cols: {
      options: colsOptions,
      control: { type: 'select' },
    },
    rows: {
      options: rowsOptions,
      control: { type: 'select' },
    },
    gap: {
      options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    justifyItems: {
      options: ['start', 'end', 'center', 'stretch'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof AvatarGroupGridComponent>;

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
  {
    id: '7',
    imageSrc: luffyHeadshot,
    displayName: 'Monkey D. Luffy',
  },
  {
    id: '8',
    imageSrc: zoloHeadshot,
    displayName: 'Roronoa Zolo',
  },
];

const Template: ComponentStory<typeof AvatarGroupGridComponent> = (
  args: any,
) => <AvatarGroupGridComponent {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  max: 6,
  children: users.map((user) => (
    <Avatar
      key={user.id}
      imageSrc={user.imageSrc}
      displayName={user.displayName}
      alt={user.displayName}
    />
  )),
  direction: 'row',
  rows: undefined,
  cols: 3,
  justifyItems: 'start',
  gap: 2,
  avatarProps: {
    size: 'px64',
    shadow: true,
    border: true,
  },
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  max: 6,
  children: users.map((user) => (
    <Tooltip key={user.id} text={user.displayName}>
      <Avatar
        imageSrc={user.imageSrc}
        displayName={user.displayName}
        alt={user.displayName}
        size="px48"
      />
    </Tooltip>
  )),
  extraTooltip: users
    .slice(4)
    .map((user) => user.displayName)
    .join(', '),
  direction: 'row',
  rows: undefined,
  cols: 3,
  justifyItems: 'start',
  gap: 2,
  avatarProps: {
    size: 'px48',
    shadow: true,
    border: true,
  },
};
