'use client';

import { useCallback, useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';

import { CardWrapper } from './card-wrapper';
import { newVerififcation } from '@/actions/new-verification';
import { FormError, FormSuccess } from '../form';

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  const token = searchParams.get('token');

  const onSubmit = useCallback(async () => {
    if (!token) {
      setError('Missing token');
      return;
    }

    try {
      const res = await newVerififcation(token);
      setSuccess(res.success);
      setError(res.error);
    } catch (error) {
      setError('Something went wrong');
    }
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel='Confirm your verification'
      backButtonHref='/auth/sign-in'
      backButtonLabel='Back to Login'
    >
      <div className='flex items-center w-full justify-center'>
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        <FormError message={error} />
      </div>
    </CardWrapper>
  );
};

export { NewVerificationForm };
