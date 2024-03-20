// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import { expect, userEvent, within } from '@storybook/test';

import { Form } from './Form';

const meta = {
  title: 'Compound/Form',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'example-email@email.com', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });
    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);

    await expect(
      canvas.getByText('Form submitted correctly!')
    ).toBeInTheDocument();
  },
};

export const InvalidForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const emailInput = canvas.getByLabelText('email', {
      selector: 'input',
    });

    await userEvent.type(emailInput, 'invalid-email', {
      delay: 100,
    });

    const passwordInput = canvas.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'ExamplePassword', {
      delay: 100,
    });

    const submitButton = canvas.getByRole('button');

    await userEvent.click(submitButton);

    await expect(
      canvas.queryByText('Form submitted correctly!')
    ).not.toBeInTheDocument();
  },
};
