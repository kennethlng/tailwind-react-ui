/* eslint-disable import/no-extraneous-dependencies */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import TooltipComponent from '../components/Tooltip';

export default {
  title: 'Components/Tooltip',
  component: TooltipComponent,
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
} as ComponentMeta<typeof TooltipComponent>;

const Template: ComponentStory<typeof TooltipComponent> = (args: any) => (
  <TooltipComponent {...args} />
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  placement: 'top',
  children: <button type="button">Hover over me</button>,
  text: 'Hello',
};
