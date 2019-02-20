import React, {Component} from 'react';

class TodoItem extends Component {
	itemStyle = () => {
		return {
		background: '#f4f4f4',
		padding: '10px',
		borderBottom: '1px #ccc dotted',
		textDecoration: this.props.item.status ? 'line-through' : ''
		}
	}
	render(){
		let { id, title, status } = this.props.item;

		return (
	      	<div className="" style={this.itemStyle()}>
	    		<div>
	    			<input 
	    				type="checkbox"
		    			checked={status} 
		    			onChange={this.props.changeStatus.bind(this,id)}
	    			/>
	    			<label htmlFor=""> Title : {title}</label>
	    			<button className="del-btn" onClick={this.props.delItem.bind(this,id)}> Delete </button>
	    			{!status && <button className='update-btn' onClick={this.props.updateForm.bind(this,{id,title})}> Update </button>}
	    		</div>
	      	</div>
		);
	}
}

export default TodoItem;