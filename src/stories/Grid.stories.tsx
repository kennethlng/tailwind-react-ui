/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GridComponent from '../components/Grid';

const items = [
  'George',
  'Bob',
  'Spiderman',
  'Harry Potter and the Prisoner of Azkhaban',
  'Toilet',
  'Disneyland',
  'Doggo',
  'Freeflow',
  'Nomadic',
  'Blade Runner 2049',
  'superfragilistic alidocious',
  'Magic Mike',
];

const colsOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const breakpointColsOptions = [undefined, ...colsOptions];

const rowsOptions = [1, 2, 3, 4, 5, 6];
const rowsOptionsWithUndefined = [undefined, ...rowsOptions];

export default {
  title: 'Components/Grid',
  component: GridComponent,
  argTypes: {
    direction: {
      options: ['row', 'col'],
      control: { type: 'radio' },
    },
    cols: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    rows: {
      options: rowsOptionsWithUndefined,
      control: { type: 'select' },
    },
    gap: {
      options: [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    gapX: {
      options: [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    gapY: {
      options: [undefined, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      control: { type: 'select' },
    },
    justifyItems: {
      options: ['start', 'end', 'center', 'stretch'],
      control: { type: 'radio' },
    },
    xs: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    sm: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    md: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    lg: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    xl: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
    xxl: {
      options: breakpointColsOptions,
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof GridComponent>;

const Template: ComponentStory<typeof GridComponent> = (args: any) => (
  <GridComponent {...args}>
    {items.map((item) => (
      <GridComponent.Item
        key={item}
        className="bg-indigo-400 text-white p-2 rounded-lg"
      >
        {item}
      </GridComponent.Item>
    ))}
  </GridComponent>
);

export const Grid = Template.bind({});
Grid.args = {
  direction: 'row',
  rows: undefined,
  cols: 3,
  gap: undefined,
  gapX: undefined,
  gapY: undefined,
  justifyItems: 'start',
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  xxl: undefined,
};

export const PinterestLayout = () => (
  <GridComponent direction="row" cols={3} justify="stretch" gap={4}>
    {items.map((item) => {
      const randomRowSpan =
        rowsOptions[Math.floor(Math.random() * rowsOptions.length)];

      return (
        <GridComponent.Item key={item} rowSpan={randomRowSpan}>
          <div
            style={{
              padding: 8,
              backgroundColor: 'lightcoral',
              borderRadius: '16px',
              height: '100%',
              width: '100%',
            }}
          >
            {item}
          </div>
        </GridComponent.Item>
      );
    })}
  </GridComponent>
);
