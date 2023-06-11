import { referralSchema } from '../validators';
import { yupResolver } from '@hookform/resolvers/yup';
import styled from 'styled-components';
import axios from 'axios';

import React from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';

const Form = styled.form<{ haserror: boolean }>`
  color: #333;
  position: relative;
  // margin-top: 50px;

  .email-logo {
    position: absolute;
    top: ${(props) => (props.haserror ? '38px' : '17px')};
    left: 12px;
  }

  .email-success {
    position: absolute;
    top: 38px;
    left: 12px;
  }

  .error-message {
    color: red;
    font-size: 10px;
    padding-bottom: 10px;
  }

  .success {
    color: green;
    font-size: 10px;
    padding-bottom: 10px;
  }
`;
const SubmitBtn = styled.button`
  width: 100%;
  padding: 15px 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #777;
  color: #fff;
  background-color: #4eb3e3;
  font-weight: 600;
  cursor: pointer;
`;
const InputField = styled.input`
  width: 100%;
  padding: 15px 30px;
  border-radius: 5px;
  outline: none;
  border: 1px solid #777;
  background-color: #fff;
  color: #333;
  font-size: 16px;
  text-indent: 15px;

  margin-bottom: 15px;

  &::placeholder {
    font-size: 14px;
    color: #999;
  }
`;

const ReferalForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<{ email: string }>({
    resolver: yupResolver(referralSchema),
  });

  const [lastEmail, setLastEmail] = React.useState<{ email: string } | null>();
  const [savedEmail, setSavedEmail] = React.useState<{
    email: string;
  } | null>();

  const fadeOut = () => {
    setTimeout(() => {
      setSavedEmail(null);
    }, 3000);
  };

  const getReferralLink = async (obj: { email: string }) => {
    try {
      const { data } = await axios.post('https://api.jsonbin.io/v3/b', obj, {
        headers: {
          'Content-Type': 'application/json',
          'X-Master-Key':
            '$2b$10$sLMGk3KrJtvBsvgle3Na1eIXT2MNzlXKKqYik7IqycHjXM.6cg0QW',
        },
      });

      return data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const onSubmit = async (data: { email: string }) => {
    if (!data.email) return;
    const dataObj = await getReferralLink(data);
    setSavedEmail(dataObj?.record);
    setLastEmail(data);
    reset();
    fadeOut();
  };

  return (
    <Form haserror={!!errors.email} onSubmit={handleSubmit(onSubmit)}>
      {errors.email ? (
        <p className="error-message">{errors.email?.message}</p>
      ) : (
        savedEmail?.email && <p className="success">Correct</p>
      )}
      <Image
        className={`email-logo ${savedEmail?.email && 'email-success'}`}
        src="/assets/email.svg"
        alt="Email logo"
        width={17}
        height={17}
      />
      <InputField
        type="email"
        placeholder="Enter your email address"
        {...register('email')}
      />

      <SubmitBtn type="submit">Get Referral Link</SubmitBtn>
    </Form>
  );
};

export default ReferalForm;
