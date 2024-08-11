import type { Meta, StoryObj } from '@storybook/react';
import { ColorfulLoading } from './ColorfulLoading';

const meta = {
  title: 'Loading/ColorfulLoading',
  component: ColorfulLoading,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ColorfulLoading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'ColorfulLoading',
  },
};
