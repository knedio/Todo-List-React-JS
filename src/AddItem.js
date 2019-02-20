import React, {Component} from 'react';

class AddItem extends Component {
	state = {
		id: '',
		title: '',
	};
	
	componentDidUpdate(prevProps) {
		if(this.props.updateData !== prevProps.updateData){
           	this.setState({
       			id: this.props.updateData.id,
				title: this.props.updateData.title,
       		});
	    }
	} 

	submitForm = (e) => {
		e.preventDefault();
		if (this.state.id) {
			this.props.updateItem(this.state);
			this.setState({
				id: '',
				title: ''
			});
		}else{
			this.props.addItem(this.state.title);
			this.setState({
				title: ''
			});
		}
	};

	formChange = (e) => {
		const {name,  value} = e.target;
		this.setState({
			[name]: value
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.submitForm}>
					<input 
						type="text" 
						placeholder="Title" 
						name="title" 
						value={this.state.title} 
						onChange={this.formChange} 
					/>
	        		<button type="submit">
	        			{!this.state.id ? 'Add' : 'Update'}
        			</button>
	        	</form>
			</div>
		);
	}
}

export default AddItem;