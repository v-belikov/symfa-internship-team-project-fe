import React from 'react';
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Select,
  Space,
} from 'antd';
import { config } from '@core/config';
import { useCreateUserMutation, useGetAvatarsQuery } from '@store/users';

import './styles.scss';

export const Registration: React.FC = () => {
  const [createdUser] = useCreateUserMutation();
  const [form] = Form.useForm();

  const onFinish = async (fieldsValue: any) => {
    const values = {
      ...fieldsValue,
      dateOfBirth: fieldsValue.dateOfBirth.format('YYYY-MM-DD'),
    };

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const dt = new Date(values.dateOfBirth);
    const dbnow = new Date(today.getFullYear(), dt.getMonth(), dt.getDate());

    values.age = today.getFullYear() - dt.getFullYear();

    if (today < dbnow) {
      values.age -= 1;
    }

    console.log('finished:', values);

    await createdUser(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onAvatarClick = (avatar: any) => {
    form.setFieldsValue({ avatarId: avatar });
  };

  const { data: avatars } = useGetAvatarsQuery({});

  return (
    <div className="registration">
      <Space direction="vertical" size={16}>
        <Card title="Registration" className="registration__card">
          <Form
            form={form}
            className="registration__card__form"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Surname"
              name="surname"
              rules={[
                { required: true, message: 'Please input your surname!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="avatarId"
              rules={[
                { required: true, message: 'Please choose your avatar!' },
              ]}
            >
              <Space wrap size={12}>
                {avatars?.map((avatar: any) => {
                  return (
                    <Avatar
                      onClick={() => onAvatarClick(avatar.id)}
                      size={64}
                      key={avatar.id}
                      className="registration__card__form__avatar"
                      src={
                        <img
                          src={`${config.API_URL}/${avatar.avatarPath}`}
                          alt="avatar"
                        />
                      }
                    />
                  );
                })}
              </Space>
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please input your phoneNumber!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: 'Please input your description!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of birth"
              rules={[
                { required: true, message: 'Please input your date of birth!' },
              ]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                { required: true, message: 'Please input your address!' },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: 'Please input your gender!' }]}
            >
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 'female', label: 'Female' },
                  { value: 'male', label: 'Male' },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: 'Please input your role!' }]}
            >
              <Select
                style={{ width: 120 }}
                options={[
                  { value: 'student', label: 'Student' },
                  { value: 'teacher', label: 'Teacher' },
                ]}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Registration
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};
