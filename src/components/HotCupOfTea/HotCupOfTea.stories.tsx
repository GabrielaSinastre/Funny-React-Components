import type { Meta, StoryObj } from '@storybook/react';
import { HotCupOfTea } from './HotCupOfTea';

const meta = {
  title: 'HotCupOfTea',
  component: HotCupOfTea,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof HotCupOfTea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'HotCupOfTea',
  },
};
