'use client';

import { useForm } from 'react-hook-form';
import { Input } from './ui/input';

const RegisterParticipant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();
  return (
    <form className="flex flex-col w-full justify-center items-center gap-6">
      <Input
        {...register('email', { required: 'Email is required' })}
        type="email"
        name=""
        id=""
        placeholder="Email"
      />
      <Input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 10,
            message: 'Password must be at least 10 characters',
          },
        })}
        type="password"
        name=""
        id=""
        placeholder="Password"
      />
      <Input
        {...register('confirmPassword', {
          required: 'Confirm password is required',
        })}
        type="password"
        name=""
        id=""
        placeholder="Confirm Password"
      />
    </form>
  );
};
export default RegisterParticipant;
