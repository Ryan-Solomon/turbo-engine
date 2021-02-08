import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

type TFormState = {
  fullName: string;
  email: string;
  password: string;
};

export const Form = () => {
  const [formState, setFormState] = useState<TFormState>({
    fullName: '',
    email: '',
    password: '',
  });

  function updateForm(
    event: ChangeEvent<HTMLInputElement>,
    kind: 'name' | 'password' | 'email'
  ) {
    if (kind === 'name') {
      setFormState({ ...formState, fullName: event.target.value });
    } else if (kind === 'password') {
      setFormState({ ...formState, password: event.target.value });
    } else if (kind === 'email') {
      setFormState({ ...formState, email: event.target.value });
    } else {
      throw new Error('kind not supported');
    }
  }

  return (
    <>
      <SForm>
        <FormSection>
          <Label id='name'>Full Name</Label>
          <Input
            value={formState.fullName}
            onChange={(e) => updateForm(e, 'name')}
            type='text'
            name='name'
          />
        </FormSection>
        <FormSection>
          <Label id='email'>Email</Label>
          <Input
            value={formState.email}
            onChange={(e) => updateForm(e, 'email')}
            type='email'
            name='email'
          />
        </FormSection>
        <FormSection>
          <Label id='password'>Password</Label>
          <Input
            value={formState.password}
            onChange={(e) => updateForm(e, 'password')}
            type='password'
            name='password'
          />
        </FormSection>
      </SForm>
    </>
  );
};

const SForm = styled.form``;

const FormSection = styled.section``;

const Label = styled.label``;

const Input = styled.input``;
