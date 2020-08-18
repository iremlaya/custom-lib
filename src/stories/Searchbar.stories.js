import React from 'react';

import Searchbar from '../components/Searchbar';

export default {
  title: 'Example/Searchbar',
  component: Searchbar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Searchbar {...args} />;

export const Unsearchable = Template.bind({});
Unsearchable.args = {
  searchable: false,
};

export const Searchable = Template.bind({});
Searchable.args = {
  searchable: true,
};
export const MultiSelect = Template.bind({});
MultiSelect.args = {
  searchable: false,
  multiSelect: true,
};

export const MultiSearchable = Template.bind({});
MultiSearchable.args = {
  searchable: true,
  multiSelect: true,
};
/*
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
*/
