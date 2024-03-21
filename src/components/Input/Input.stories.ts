import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'Primitives/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    name: 'name',
    label: 'Enter your name',
  },
};

export const Email: Story = {
  args: {
    name: 'email',
    type: 'email',
    label: 'Enter your email',
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    type: 'password',
    label: 'Enter your password',
  },
};
