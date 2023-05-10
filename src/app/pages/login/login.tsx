import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Form, Input, message } from 'antd';
import { Loader } from '@components/ui-kit';
import { useGetCurrentUserMutation, useLoginUserMutation } from '@store/users';
import { setToken } from '@store/users/auth-slice';
import { useAppDispatch } from '../../core/hooks/use-app-dispatch';
import { EmailModal } from './components/restore-password-email';

import './styles.scss';

export const Login: React.FC = () => {
  const redirect = useNavigate();
  const dispatch = useAppDispatch();

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

  // возвращает токен если юзер есть и данные верные
  const [loginUser, { data: loggedUser, isLoading, isSuccess }] =
    useLoginUserMutation();

  // возращает объект юзер со всеми значениями по токену
  // const { data: allLoggedUser } = useGetCurrentUserQuery(loggedUser?.token);
  const [getCurrent, { isSuccess: isGetCurrentUserSuccess }] =
    useGetCurrentUserMutation();

  const onFinish = async () => {
    if (email && password) {
      await loginUser({ email, password });
      await getCurrent({});

      // dispatch(setUser(allLoggedUser.user));
    } else {
      message.info('login or password is empty');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    message.info('Failed', errorInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setToken(loggedUser.token));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isGetCurrentUserSuccess) {
      redirect('/client');
    }
  }, [isGetCurrentUserSuccess]);

  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const showEmailModal = () => {
    setIsEmailModalOpen(true);
  };

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
              <Form.Item>
                <span className="login__form-forgot" onClick={showEmailModal}>
                  Forgot password
                </span>
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </Card>

          <EmailModal
            isEmailModalOpen={isEmailModalOpen}
            setIsEmailModalOpen={setIsEmailModalOpen}
          />
        </div>
      )}
    </>
  );
};
