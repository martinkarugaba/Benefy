'use client';

import { FieldValues, useForm } from 'react-hook-form';
import { Input } from './ui/input';
import { Button } from './ui/button';

const RegisterParticipant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    // submit data to server
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full justify-center items-center gap-6"
    >
      <Input
        {...register('email', { required: 'Email is required' })}
        type="email"
        placeholder="Email"
      />
      {errors.email && (
        <p className="text-destructive">{`${errors.email.message}`}</p>
      )}
      <Input
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 10,
            message: 'Password must be at least 10 characters',
          },
        })}
        type="password"
        placeholder="Password"
      />
      {errors.password && (
        <p className="text-destructive">{`${errors.password.message}`}</p>
      )}
      <Input
        {...register('confirmPassword', {
          required: 'Confirm password is required',
          validate: (value) =>
            value === getValues('password') || "Passwords don't match",
        })}
        type="password"
        placeholder="Confirm Password"
      />
      {errors.confirmPassword && (
        <p className="text-destructive">{`${errors.confirmPassword.message}`}</p>
      )}
      <Button disabled={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
};
export default RegisterParticipant;
