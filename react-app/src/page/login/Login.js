import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd'
import './Login.css'

const FormItem = Form.Item;

class LoginForm extends Component {
  handleSubmit = (e) => {
	e.preventDefault();
	// 验证用户名密码输入是否符合规格
    this.props.form.validateFields((err, values) => {
      if (!err) {
		console.log('Received values of form: ', values);
		this.props.history.push('/home') // 点了登录跳进home页
      }
	});
  }
  render() {
    const { getFieldDecorator } = this.props.form;
	return (
	  <div className='loginContainer'>
	   <div className='formContainer'>
		<Form onSubmit={this.handleSubmit} className="login-form">
		  <FormItem>
			{getFieldDecorator('userName', {
				rules: [{ required: true, message: 'Please input your username!' }],
			})(
				<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
			)}
			</FormItem>
			<FormItem>
			{getFieldDecorator('password', {
				rules: [{ required: true, message: 'Please input your Password!' }],
			})(
				<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
			)}
			</FormItem>
			<FormItem>
			<Button type="primary" htmlType="submit" className="login-form-button">
				Log in
			</Button>
		  </FormItem>
		</Form>
		</div>
	  </div>
    );
  }
}

const Login = Form.create()(LoginForm);
export default Login