import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { expect, within } from '@storybook/test';

const meta = {
  title: 'Components/List',
  component: List,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ShortList: Story = {
  args: {
    items: [
      { id: 1, name: 'First', description: 'First item' },
      { id: 2, name: 'Second', description: 'Second item' },
    ],
  },
};

export const LongList: Story = {
  args: {
    items: [
      { id: 1, name: 'First', description: 'First item' },
      { id: 2, name: 'Second', description: 'Second item' },
      { id: 3, name: 'Third', description: 'Third item' },
      { id: 4, name: 'Fourth', description: 'Fourth item' },
      { id: 5, name: 'Fifth', description: 'Fifth item' },
      { id: 6, name: 'Sixth', description: 'Sixth item' },
      { id: 7, name: 'Seventh', description: 'Seventh item' },
      { id: 8, name: 'Eighth', description: 'Eighth item' },
      { id: 9, name: 'Ninth', description: 'Ninth item' },
      { id: 10, name: 'Tenth', description: 'Tenth item' },
    ],
  },
};
