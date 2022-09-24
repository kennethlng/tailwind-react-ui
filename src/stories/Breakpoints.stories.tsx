import { ComponentMeta, ComponentStory } from '@storybook/react';
import useBreakpoint from '../hooks/useBreakpoint';
import Typography from '../components/Typography';

const Breakpoints = () => {
  const { breakpoint, width } = useBreakpoint();

  return (
    <div>
      <Typography variant="h5" align="center">
        ← Resize the window →
      </Typography>
      <Typography align="center">
        Current breakpoint: {`"${breakpoint}"`}
      </Typography>
      <Typography align="center">Number value: {width}</Typography>
    </div>
  );
};

export default {
  title: 'Hooks/useBreakpoint',
  component: Breakpoints,
} as ComponentMeta<typeof Breakpoints>;

const Template: ComponentStory<typeof Breakpoints> = (args: any) => (
  <Breakpoints {...args} />
);

export const Demo = Template.bind({});
