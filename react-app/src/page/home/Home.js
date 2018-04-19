import React, { Component } from 'react';
import {
	Route,
	Link,
  } from 'react-router-dom';
import { connect } from 'react-redux';
//=====组件=====
import About from '../about/About.js';
import News from '../news/News.js';
// =========action=========
import { getName } from '../../action/home.js'

class Home extends Component {
	constructor(props) {
		super(props)
	}

    componentDidMount() {
		console.log("Home渲染完毕", this.props.dispatch)
		this.props.dispatch(getName())
    }
	
	render() {
		// console.log('state', this.props.homeName)
		return (
			<div>
				<Link to="/home/about">关于我们</Link>
				<Link to="/home/news">新闻</Link>
				<div>
					<Route path="/home/about" component={About}/>
					<Route path="/home/news" component={News}/>
				</div>
				<div>{this.props.homeName}</div>
			</div>
		);
	}
}
// 第一种写法
const mapStateToProps = function(state) {
	console.log('state', state)
	return {
	  homeName: state.homeReducer.homeName,
	};
  };

export default connect(mapStateToProps)(Home);

// // // 第二种写法
// export default connect(
// 	state => ({
// 		homeName: state.homeReducer.homeName,
// 	}),
// )(Home)