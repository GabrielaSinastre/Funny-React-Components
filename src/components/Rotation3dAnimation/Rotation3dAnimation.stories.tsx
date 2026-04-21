import type { Meta, StoryObj } from '@storybook/react';
import { Rotation3dAnimation } from './Rotation3dAnimation';

const meta = {
  title: 'Rotation3dAnimation/Rotation3dAnimation',
  component: Rotation3dAnimation,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Rotation3dAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'Rotation3dAnimation',
  },
};
