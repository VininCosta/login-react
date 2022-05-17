import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, FacebookFilled, TwitterSquareFilled, GithubFilled } from '@ant-design/icons';

const NormalLoginForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div className='form'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Login</h1> <br />
      <Form.Item
        name="username"
        className='label'
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        className='label'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button> <br />
        <a href="">register now!</a> <br /><br />
        <p>Or Sign Up Using</p> 
        <div className='icon'>
        <FacebookFilled /> <TwitterSquareFilled /> <GithubFilled />
        </div>
      </Form.Item>
    </Form>
    </div>
  );
};

export default () => <NormalLoginForm />;
   

