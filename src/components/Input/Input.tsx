import React from 'react';
import './input.css';

/**
 * Primary UI component for user input
 */
export const Input = ({
  label,
  type = 'text',
  name,
}: {
  label: string;
  type?: string;
  name: string;
}) => {
  return (
    <div className='storybook-input'>
      <label className='storybook-input' htmlFor={label}>
        {label}
      </label>
      <input name={name} type={type} id={label} />
    </div>
  );
};
