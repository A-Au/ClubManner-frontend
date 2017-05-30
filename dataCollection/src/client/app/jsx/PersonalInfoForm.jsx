import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

class TopFitSelection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			personalInfo: {
				shirtSize: null,
				waistSize: null,
				shoeSize: null,
				height: null,
				weight: null,
				age: null,
				// userInfo: {
				// 	firstName: null,
				// 	lastName: null,
				// 	email: null,
				// 	passwd: null,
				// 	phone: null,
				// 	zipCode: null
				// }
			}
		};
	}

	handleChange(e){
		this.setState({value: e.target.value});
	}

	goToPrevious(){
		this.props.decrementState();
	}

	updatePersonalInfo(){
		var infoSet = [];
		if(this.state.selectedTopFit !== -1){
			this.props.updateObject('personalInfo',this.state.selectedTopFit);
			// this.state.styleSelect = -1;
		}
	}

	selectStyle(index){
		this.setState({selectedTopFit:index})
	}

	render(){
		const { decrementState } = this.props
		const { incrementState } = this.props
		const { updateObject } = this.props
		return(
			<div>
				<div className="col-sm-12 ">
					<h1 className="DCH">What is your preferred top fit?</h1>
				</div>

				<div className = 'col-sm-12 NavButton'>
					<ButtonToolbar>
						<Button onClick = {this.updateTopFit.bind(this)} className='push-right' bsStyle="primary">Next</Button>
						<Button onClick = {this.goToPrevious.bind(this)} className='push-right'>Back</Button>
					</ButtonToolbar>
				</div>
			</div>
		);
	}
}

export default TopFitSelection;