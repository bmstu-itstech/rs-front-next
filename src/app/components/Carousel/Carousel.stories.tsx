import {fn} from '@storybook/test';
import {Meta, StoryObj} from '@storybook/react';

import {Props} from './Ads.props';



const ActionsData = {
  onSelect: fn(),
  onChange: fn(),
};

const meta: Meta<Props> = {
  component: Ads,
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {
    params: part,
    hasMetro: false,
  },
};
