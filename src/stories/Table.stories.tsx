import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Table from '../components/Table';

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
  {
    name: 'DSFdkjffsfs Walton',
    title: 'Front-end Developer',
    email: 'sdasdf.walton@example.com',
    role: 'Member',
  },
  {
    name: 'WEFPER Walton',
    title: 'Front-end Developer',
    email: 'hgjkgktj.walton@example.com',
    role: 'Member',
  },
  {
    name: 'EFwefsdfdsf Walton',
    title: 'Front-end Developer',
    email: 'egewgddfer.walton@example.com',
    role: 'Member',
  },
];

export default {
  title: 'Components/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.Cell variant="header">Name</Table.Cell>
        <Table.Cell variant="header">Title</Table.Cell>
        <Table.Cell variant="header">Email</Table.Cell>
        <Table.Cell variant="header">Role</Table.Cell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {people.map((person) => (
        <Table.Row key={person.email}>
          <Table.Cell variant="body">{person.name}</Table.Cell>
          <Table.Cell variant="body">{person.title}</Table.Cell>
          <Table.Cell variant="body">{person.email}</Table.Cell>
          <Table.Cell variant="body">{person.role}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export const Demo = Template.bind({});
