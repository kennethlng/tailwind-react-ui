import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarComponent from '../components/Avatar';
import Grid from '../components/Grid';
import Typography from '../components/Typography';
import usoppHeadshot from './assets/usopp.png';
import workingPerson from './assets/working.png';

const names = [
  'Mikhiel',
  'Mikhiel Tahreen',
  'Nick',
  'Nicholas',
  'Nick Scavone',
  'Nicholas Scavone',
  'James',
  'James Beams',
  'Jamothy',
  'Jamothy Beams',
  'Kenneth',
  'Kenneth Ng',
  'Ken',
  'Tim',
  'Timothy',
  'Timothy Martin',
  'Tim Martin',
  'Romi',
  'Romana',
  'Romano',
  'Rominanomi',
];

export default {
  title: 'Components/Avatar',
  component: AvatarComponent,
  argTypes: {
    variant: {
      options: ['circle', 'rounded'],
      control: { type: 'radio' },
    },
    size: {
      options: [
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
      control: { type: 'radio' },
    },
    color: {
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    border: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
  <AvatarComponent {...args} />
);

export const ImageAvatar = Template.bind({});
ImageAvatar.args = {
  src: usoppHeadshot,
  alt: 'Usopp',
  size: 'px40',
  variant: 'circle',
  color: 1,
  border: false,
};

export const TransparentImageAvatar = Template.bind({});
TransparentImageAvatar.args = {
  src: workingPerson,
  alt: 'Working',
  size: 'px40',
  variant: 'circle',
  color: 1,
  border: false,
};

export const LetterAvatar = Template.bind({});
LetterAvatar.args = {
  size: 'px40',
  variant: 'circle',
  children: 'NP',
  color: 1,
  border: false,
};

export const ErrorLoadingImage = Template.bind({});
ErrorLoadingImage.args = {
  src: '/broken-image.jpg',
  alt: 'Usopp',
  size: 'px40',
  variant: 'circle',
  color: 1,
  border: false,
};

export const AltFallbackAvatar = Template.bind({});
AltFallbackAvatar.args = {
  size: 'px40',
  variant: 'circle',
  alt: 'George Solo',
  color: 1,
  border: false,
};

export const PredeterminedColors = () => (
  <>
    <Grid cols={2} gap={10}>
      {[0, 1].map((i) => (
        <div key={i} style={{ borderWidth: 1, padding: 8 }}>
          <Grid justifyItems="stretch" gap={4}>
            {names.map((name) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AvatarComponent alt={name} />
                <Typography variant="caption" color="tertiary">
                  {name}
                </Typography>
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </Grid>
  </>
);

export const RandomColors = () => (
  <>
    <Grid cols={2} gap={10}>
      {[0, 1].map((i) => (
        <div key={i} style={{ borderWidth: 1, padding: 8 }}>
          <Grid justifyItems="stretch" gap={4}>
            {names.map((name) => (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <AvatarComponent>{name.substring(0, 1)}</AvatarComponent>
                <Typography variant="caption" color="tertiary">
                  {name}
                </Typography>
              </div>
            ))}
          </Grid>
        </div>
      ))}
    </Grid>
  </>
);
