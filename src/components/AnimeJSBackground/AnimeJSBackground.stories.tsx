import type { Meta, StoryObj } from '@storybook/react';
import { AnimeJSBackground } from './AnimeJSBackground';

const meta = {
  title: 'AnimeJSBackground',
  component: AnimeJSBackground,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof AnimeJSBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'AnimeJSBackground',
  },
};
