import { ComponentMeta } from '@storybook/react';
import TypographyComponent, { ITypographyVariant} from '../components/Typography';

const variantOptions: ITypographyVariant[] = [
  'h5',
  'body1',
  'body2',
  'body3',
  'caption',
  'captionMini',
  'overline',
  'subtitle',
];

const ContentMap: Record<ITypographyVariant, string> = {
  h5: 'h5. Heading',
  body1:
    'body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  body2:
    'body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  body3:
    'body3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.',
  caption: 'caption text',
  captionMini: 'caption text',
  overline: 'OVERLINE TEXT',
  subtitle:
    'subtitle. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
} as const;

export default {
  title: 'Components/Typography',
  component: TypographyComponent,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: variantOptions,
    },
    color: {
      control: { type: 'radio' },
      options: [
        'primary',
        'secondary',
        'tertiary',
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
} as ComponentMeta<typeof TypographyComponent>;

const Template = (args: any) => (
  <div style={{ maxWidth: 200 }}>
    <TypographyComponent {...args} />
  </div>
);

export const Playground = Template.bind({});
Playground.args = {
  variant: 'body1',
  children: 'This is some text',
  as: undefined,
  bold: false,
  color: 'primary',
  truncate: false,
  whitespace: 'normal',
  align: 'left',
};

export const Sheet = () => (
  <div>
    {variantOptions.map((option) => (
      <div style={{ marginTop: 16 }}>
        <TypographyComponent variant={option}>
          {ContentMap[option]}
        </TypographyComponent>
      </div>
    ))}
  </div>
);

export const Inline = () => (
  <TypographyComponent variant="body1">
    I am going to make an{' '}
    <TypographyComponent variant="body1" bold as="span">
      emphasis
    </TypographyComponent>{' '}
    in this sentence.
  </TypographyComponent>
);

export const Truncate = Template.bind({});
Truncate.args = {
  truncate: true,
  children: 'This is a really long sentence that will be truncated.',
};
