import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Form from './Form'

//=====组件=====

class About extends Component {
	constructor(props) {
	  super(props)
	  this.state={}
	}
	componentDidMount() {
		console.log("About渲染完毕")
	}

	render() {
		return (
			<Query 
				query={gql`
					{
						rates(currency: "USD") {
							currency
							rate
						}
					}
				`}  // query: documentNode
			>
				{({ loading, error, data }) => { 	
					// 这部分是Query的children部分，用来渲染UI
					// loading: 指示请求是否在执行； error: 运行错误； data: 查询的数据
					if (loading) return <p>Loading...</p>;
					if (error) return <p>Error :(</p>;

					return (
						<div style={{ display: 'flex' }}>
						  <div>
								{
									data.rates.map(({ currency, rate }) => (
										<div key={currency}>
											<p>{`${currency}: ${rate}`}</p>
										</div>
									))
								}
							</div>
							<Form />
						</div>
					)
				}}
			</Query>
		);
	}
}

export default About