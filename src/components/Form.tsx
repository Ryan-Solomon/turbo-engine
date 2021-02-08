import React from 'react';
import styled from 'styled-components';

export const Form = () => {
  return (
    <>
      <SForm>
        <FormSection>
          <Label id='name'>Full Name</Label>
          <Input type='text' name='name' />
        </FormSection>
        <FormSection>
          <Label id='email'>Email</Label>
          <Input type='email' name='email' />
        </FormSection>
        <FormSection>
          <Label id='password'>Password</Label>
          <Input type='password' name='password' />
        </FormSection>
      </SForm>
    </>
  );
};

const SForm = styled.form``;

const FormSection = styled.section``;

const Label = styled.label``;

const Input = styled.input``;
