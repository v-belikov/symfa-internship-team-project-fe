import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input } from 'antd';
import { Loader } from '@components/ui-kit';
import { useLoginUserMutation } from '@store/users';
import { setToken } from '@store/users/models/auth-slice';
import { useAppDispatch } from '../../core/hooks/use-app-dispatch';

import './styles.scss';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onEmailChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const onPasswordChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );
  const redirect = useNavigate();
  const dispatch = useAppDispatch();

  const [loginUser, { data, isLoading, isSuccess }] = useLoginUserMutation();

  const loginHandler = async () => {
    if (email && password) {
      await loginUser({ email, password });
    } else {
      alert('login of password is empty');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(data.token));
      redirect('/client');
      console.log('successful login');
    }
  }, [isSuccess]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="login">
          <Card title="Login" className="login__card">
            <Form
              className="login__card__form"
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                ]}
              >
                <Input onChange={onEmailChange} />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password onChange={onPasswordChange} />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button
                  onClick={() => {
                    loginHandler();
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      )}
    </>
  );
};
