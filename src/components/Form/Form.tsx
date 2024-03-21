import React, { FormEvent, useState } from 'react';
import './form.css';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';

/**
 * Component to submit data
 */
export const Form = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = (
      event.currentTarget.elements.namedItem('email') as HTMLInputElement
    ).value;
    const password = (
      event.currentTarget.elements.namedItem('password') as HTMLInputElement
    ).value;
    if (email !== '' && password !== '') {
      setFormSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`storybook-form ${formSubmitted ? 'submitted' : ''}`}
    >
      <Input label='email' type='email' name='email' />
      <Input label='password' type='password' name='password' />
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
