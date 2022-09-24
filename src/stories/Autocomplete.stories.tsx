import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Autocomplete, { IAutocompleteOption } from '../components/Autocomplete';
import Chip from '../components/Chip';
import Alert from '../components/Alert';
import Button from '../components/Button';

const names: IAutocompleteOption[] = [
  'Durward Reynolds',
  'Kenton Towne',
  'Therese Wunsch',
  'Benedict Kessler',
  'Katelyn Rohan',
];

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const [values, setValues] = useState<IAutocompleteOption[]>([]);

  return <Autocomplete {...args} values={values} onChange={setValues} />;
};

export const Basic = Template.bind({});
Basic.args = {
  options: names,
  label: 'Names',
  placeholder: 'Type here...',
};

export const CustomChips = Template.bind({});
CustomChips.args = {
  options: names,
  label: 'Names',
  error: true,
  helperText: 'Nope nope nope',
  renderChips: (values, getTagProps) =>
    values.map((value) => (
      <Chip key={value} label={value} color="error" {...getTagProps(value)} />
    )),
};

export const WithAlert = Template.bind({});
WithAlert.args = {
  options: names,
  label: 'Users',
  placeholder: 'Type here',
  helperText: (
    <Alert
      color="error"
      action={
        <Button color="inherit" variant="text">
          Remove
        </Button>
      }
    >
      There are some invalid names.
    </Alert>
  ),
  renderChips: (values, getTagProps) =>
    values.map((value) => (
      <Chip key={value} label={value} color="error" {...getTagProps(value)} />
    )),
};
