import type { Meta, StoryObj } from '@storybook/react';
import { EyesFollowMouse } from './EyesFollowMouse';

const meta = {
  title: 'EyesFollowMouse/EyesFollowMouse',
  component: EyesFollowMouse,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof EyesFollowMouse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'EyesFollowMouse',
  },
};
