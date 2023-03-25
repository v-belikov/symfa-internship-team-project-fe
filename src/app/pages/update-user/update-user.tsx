import React from 'react';
import { Avatar, Button, Card, DatePicker, Form, Input, Space } from 'antd';
import { config } from '@core/config';
import { useGetAvatarsQuery, useUpdateUserMutation } from '@store/users';

export const UpdateUser: React.FC = () => {
  const [updateUser] = useUpdateUserMutation();

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

    await updateUser(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const { data: avatars } = useGetAvatarsQuery({});

  const onAvatarClick = (avatar: any) => {
    form.setFieldsValue({ avatarId: avatar });
  };

  return (
    <div>
      <Button>Back</Button>
      <Space direction="vertical" size={16}>
        <Card title="Profile editing" className="registration__card">
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
            <Form.Item label="Name" name="name" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Surname"
              name="surname"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Avatar"
              name="avatarId"
              rules={[{ required: false }]}
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
            <Form.Item label="Email" name="email" rules={[{ required: false }]}>
              <Input />
            </Form.Item>
            <Form.Item
              label="Phone number"
              name="phoneNumber"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of birth"
              rules={[{ required: false }]}
            >
              <DatePicker />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: false }]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Space>
    </div>
  );
};
