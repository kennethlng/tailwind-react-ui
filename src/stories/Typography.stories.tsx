import { ComponentMeta } from '@storybook/react';
import Typography, { ITypographyVariant } from '../components/Typography';

const variantOptions: ITypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'body1',
  'body2',
  'subtitle1',
  'subtitle2',
  'caption',
  'overline',
];

const ContentMap: Partial<Record<ITypographyVariant, string>> = {
  h1: 'h1. Heading 1',
  h2: 'h2. Heading 2',
  h3: 'h3. Heading 3',
  h4: 'h4. Heading 4',
  h5: 'h5. Heading 5',
  body1:
    'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  body2:
    'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  caption: 'caption text',
  overline: 'OVERLINE TEXT',
  subtitle1:
    'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  subtitle2:
    'subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
} as const;

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: variantOptions,
    },
    color: {
      control: { type: 'radio' },
      options: [
        'textPrimary',
        'textSecondary',
        'primary',
        'secondary',
        'success',
        'info',
        'error',
        'warning',
      ],
    },
    truncate: {
      control: { type: 'boolean' },
    },
    align: {
      control: { type: 'radio' },
      options: ['left', 'right', 'center', 'justify'],
    },
    whitespace: {
      control: { type: 'radio' },
      options: ['normal', 'nowrap'],
    },
    as: {
      control: { type: 'radio' },
      options: [
        undefined,
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'span',
        'label',
      ],
    },
  },
} as ComponentMeta<typeof Typography>;

const Template = (args: any) => (
  <div style={{ maxWidth: 200 }}>
    <Typography {...args} />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'body1',
  children: 'This is some text',
  as: undefined,
  color: 'primary',
  truncate: false,
  whitespace: 'normal',
  align: 'left',
};

export const Sheet = () => (
  <div>
    {variantOptions.map((option) => (
      <div style={{ marginTop: 16 }}>
        <Typography variant={option}>{ContentMap[option]}</Typography>
      </div>
    ))}
  </div>
);

export const Inline = () => (
  <Typography variant="body1">
    I am going to make an{' '}
    <Typography variant="body1" as="span">
      emphasis
    </Typography>{' '}
    in this sentence.
  </Typography>
);

export const Truncate = Template.bind({});
Truncate.args = {
  truncate: true,
  children: 'This is a really long sentence that will be truncated.',
};
