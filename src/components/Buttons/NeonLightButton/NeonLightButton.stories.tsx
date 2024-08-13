import type { Meta, StoryObj } from '@storybook/react';
import { NeonLightButton } from './NeonLightButton';

const meta = {
  title: 'Buttons/NeonLightButton',
  component: NeonLightButton,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof NeonLightButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'NeonLightButton',
  },
};
