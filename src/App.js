import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import todoData from './todoData';
import TodoItem from './TodoItem';
import AddItem from './AddItem';
import About from './About';

class App extends Component {
	state = {
		todoData: todoData,
		title: '',
		updateData: {
			id: '',
			title: ''
		}
	};

	changeStatus = (id) => {
		this.setState( prevState => {
			return {
				todoData: prevState.todoData.map(todo => {
					if (todo.id === id) {
						todo.status = !todo.status
					}
					return todo;
				})
			}
		});
		
	};

	updateForm = (data) => {
		// console.log(data);
		this.setState( prevState => {
			return {
				updateData: {
					id: data.id,
					title: data.title
				}
			}
		});
	};

	updateItem = (data) => {
		this.setState( prevState => {
			return {
				todoData: prevState.todoData.map(todo => {
					if (todo.id === data.id) {
						todo.title = data.title
					}
					return todo;
				})
			}
		});
	};
	
	delItem = (id) => {
		this.setState( prevState => {
			return {
				todoData: [ ...prevState.todoData.filter( todo => todo.id !== id )]
			}
		});
	};

	addItem = (title) => {
		const data = this.state.todoData;
		const get_length = data.length;
		const last_id = get_length > 0 ? data[get_length-1].id : 0 ;

		const newData = {
			id: last_id+1,
			title: title,
			status: false
		};

		this.setState( prevState => {
			return {
					todoData: [
					...prevState.todoData, newData
				]
			}
		});
	};

  	render() {
	  	let data = this.state.todoData;
	  	const todoItem = data.map( item => (
        	<TodoItem key={item.id} item={item} changeStatus={this.changeStatus} delItem={this.delItem} updateForm={this.updateForm} />
		));
	    return (
	        <div>
	        	<Router>
	        		<div>
	        			<header className="header">
	        				<h1>Todo List</h1>
		        			<Link to="/">Home</Link> | <Link to="/about">About</Link>
	        			</header>
	        			<Route exact path="/" render={ props => (
							<React.Fragment>
								<AddItem addItem={this.addItem} updateData={this.state.updateData} updateItem={this.updateItem} />
		        				{todoItem}
		        			</React.Fragment>
		        		)} />
		        		<Route path="/about" component={About} />
	        		</div>
	        	</Router>
	        </div>
        );
  	}
}

export default App;
