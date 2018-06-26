import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

//=====组件=====

const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

class Form extends Component {
	constructor(props) {
	  super(props)
	  this.state={}
	}
	componentDidMount() {
		console.log("Form渲染完毕")
	}
    
	render() {
      let input;
		return (
		  <Mutation mutation={ADD_TODO}>
        {(addTodo, { data }) => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                addTodo({ variables: { type: input.value } });
                input.value = "";
              }}
            >
              <input
                ref={node => {
                  input = node;
                }}
              />
              <button type="submit">Add Todo</button>
            </form>
          </div>
        )}
      </Mutation>
		);
	}
}

export default Form