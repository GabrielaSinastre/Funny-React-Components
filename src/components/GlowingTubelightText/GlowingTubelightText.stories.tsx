import type { Meta, StoryObj } from '@storybook/react';
import { GlowingTubelightText } from './GlowingTubelightText';

const meta = {
  title: 'GlowingTubelightText/GlowingTubelightText',
  component: GlowingTubelightText,
  // tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof GlowingTubelightText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    // primary: true,
    label: 'GlowingTubelightText',
  },
};
