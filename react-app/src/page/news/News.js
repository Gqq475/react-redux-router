import React, { Component } from 'react';

//=====组件=====

class News extends Component {
	constructor(props) {
		super(props);
		// 设置 initial state
		this.state = {
			list: [
				{id:1,title:"a",con:"caaaaaaaaaaaaaaaa"},
				{id:2,title:"b",con:"cbbbbbbbbbbb"},
				{id:3,title:"c",con:"cccccccccccccc"},
				{id:4,title:"d",con:"cddddddddddddd"},
				{id:5,title:"e",con:"ceeeeeeeeeeee"}
			]
		};
    }

	componentDidMount() {
        console.log("News渲染完毕")
    }

	render() {
		return (
			<div>
				<h3>新闻页面</h3>
				<ul>
					{
						this.state.list.map(function(item,i){
							return <li key={item.id}>
								<a>{item.title}</a>
								<span>{item.con}</span>
							</li>						
						})	
					}
				</ul>
			</div>
		);
	}
}


export default News