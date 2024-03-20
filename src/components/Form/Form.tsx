import React, { FormEvent, useState } from 'react';
import './form.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

/**
 * Component to submit data
 */
export const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (event.target[0].value !== '' && event.target[1].value !== '') {
      setFormSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`storybook-form ${formSubmitted ? 'submitted' : ''}`}
    >
      <Input label='email' type='email' />
      <Input label='password' type='password' />
      <Button
        backgroundColor={formSubmitted ? 'green' : 'steelblue'}
        primary
        label='submit'
        type='submit'
      />

      {formSubmitted && (
        <div className='submitted-label'>Form submitted correctly!</div>
      )}
    </form>
  );
};
