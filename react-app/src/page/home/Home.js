import React, { Component } from 'react';
import {
	Route,
	Link,
  } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Icon, Button } from 'antd'
//=====组件=====
import About from '../about/About.js';
import News from '../news/News.js';

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
		}
	}
	
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
	}

  render() {
    return (
			<div style={{ display: 'flex', paddingTop: '20px' }}>
				<div style={{ width: '256px', marginRight: '40px' }}>
					<Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
						<Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
					</Button>
					<Menu
						defaultSelectedKeys={['1']}
						defaultOpenKeys={['sub1']}
						mode="inline"
						theme="dark"
						inlineCollapsed={this.state.collapsed}
					>
						<Menu.Item key="1">
							<Icon type="pie-chart" />
							<span>关于我们</span>
							<Link to="/home/about" />
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="desktop" />
							<span>新闻</span>
							<Link to="/home/news" />
						</Menu.Item>
					</Menu>
				</div>
				<div style={{ width: '70%' }}>
					<Route path="/home/about" component={About}/>
					<Route path="/home/news" component={News}/>
				</div>
			</div>
    );
  }
}
// 第一种写法 connect组件，return里面的value为定义的store里面的state的值,
// key为这个页面用store里面state时的名字
const mapStateToProps = function(state) {
	console.log('state', state)
	return {
	  name: state.homeReducer.homeName,
	};
  };

export default connect(mapStateToProps)(Home);

// // // 第二种写法
// export default connect(
// 	state => ({
// 		homeName: state.homeReducer.homeName,
// 	}),
// )(Home)