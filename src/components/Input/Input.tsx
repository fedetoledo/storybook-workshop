import React from 'react';
import './input.css';

/**
 * Primary UI component for user input
 */
export const Input = ({
  label,
  type = 'text',
}: {
  label: string;
  type?: string;
}) => {
  return (
    <div className='storybook-input'>
      <label className='storybook-input' htmlFor={label}>
        {label}
      </label>
      <input type={type} id={label} />
    </div>
  );
};
