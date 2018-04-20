import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Pagination } from 'antd';
// =========action=========
// import { getName } from '../../action/home.js'
import { getCnodeList } from '../../action/news.js'

const TabPane = Tabs.TabPane;

class News extends Component {
  constructor(props) {
	super(props);
	// 设置 initial state
	this.state = {
	  activeName: 'all',
	};
  }

  componentDidMount() {
	const tmp = {
	  activeName: this.state.activeName,
	}
    this.props.dispatch(getCnodeList(tmp))
  }

  onChange =(activeKey) => {
	console.log( 'activekEY', activeKey)
    this.setState({
		activeName: activeKey
	}, () => {
	  const tmp = {
		activeName: this.state.activeName,
	  }
	  this.props.dispatch(getCnodeList(tmp))
	})
  }
  render() {
	const { cnodeList } = this.props
	return (
	  <div>
		<h3>Cnode社区</h3>
		<Tabs defaultActiveKey="1" onChange={this.onChange}>
		  <TabPane tab="全部" key="all">
		    {
			  cnodeList.length &&
			  cnodeList.map(item => {
				return (
				  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>
					  <a>{item.title}</a>
					</div>
					<span>{item.reply_count}/{item.visit_count}</span>
				  </div>
				)
			  })
			}
		  </TabPane>
		  <TabPane tab="分享" key="share">
			{
			  cnodeList.map(item => {
				return (
				  <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
					<a>{item.title}</a>
					<span>{item.reply_count}/{item.visit_count}</span>
				  </div>
				)
			  })
			} 
		  </TabPane>
		  <TabPane tab="问答" key="ask">
		  {
			cnodeList.map(item => {
			  return (
				<div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
				  <a>{item.title}</a>
				  <span>{item.reply_count}/{item.visit_count}</span>
			    </div>
			  )
			})
		  } 
		  </TabPane>
		  <TabPane tab="招聘" key="job">
		  {
			cnodeList.map(item => {
			  return (
				<div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
				  <a>{item.title}</a>
				  <span>{item.reply_count}/{item.visit_count}</span>
			    </div>
			  )
			})
		  } 
		  </TabPane>
		</Tabs>
	  </div>
	);
  }
}

export default connect(
  state => ({
	cnodeList: state.newsReducer.cnodeList,
  }),
)(News)