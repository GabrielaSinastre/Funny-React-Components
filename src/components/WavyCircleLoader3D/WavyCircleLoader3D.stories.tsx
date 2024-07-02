import type { Meta, StoryObj } from '@storybook/react';
import { WavyCircleLoader3D } from './WavyCircleLoader3D';

const meta = {
  title: 'WavyCircleLoader3D',
  component: WavyCircleLoader3D,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof WavyCircleLoader3D>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'WavyCircleLoader3D',
  },
};
