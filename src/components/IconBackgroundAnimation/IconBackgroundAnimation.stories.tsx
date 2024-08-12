import type { Meta, StoryObj } from '@storybook/react';
import { IconBackgroundAnimation } from './IconBackgroundAnimation';

const meta = {
  title: 'IconBackgroundAnimation/IconBackgroundAnimation',
  component: IconBackgroundAnimation,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof IconBackgroundAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'IconBackgroundAnimation',
  },
};
