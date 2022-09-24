import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Typography from '../components/Typography';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Demo = Template.bind({});
Demo.args = {
  children: (
    <>
      <Card.Header
        title="Esther Howard"
        subtitle="Forward Response Developer"
      />
      <Card.Content>
        <Typography>
          Doloribus dolores nostrum quia qui natus officia quod et dolorem. Sit
          repellendus qui ut at blanditiis et quo et molestiae.
        </Typography>
      </Card.Content>
      <Card.Footer>
        <Button color="primary" variant="filled">
          Email
        </Button>
        <Button color="secondary" variant="filled">
          Call
        </Button>
      </Card.Footer>
    </>
  ),
};
