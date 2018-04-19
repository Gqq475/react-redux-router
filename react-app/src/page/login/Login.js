import React, { Component } from 'react';

//=====组件=====

class Login extends Component {

    componentDidMount() {
        console.log("Login渲染完毕")
    }

	goLogin = () => {
		alert("开始登录")
		this.props.history.push('/home')
    }

	render() {
		return (
			<div>
				<h3>登录页面</h3>
				<div>
					用户名<input type="text" />
				</div>
				<div>
					密码<input type="text" />
				</div>
				<div>
					<button onClick={this.goLogin}>登录</button>
				</div>
			</div>
		);
	}
}


export default Login