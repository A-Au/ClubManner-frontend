import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'


import StyleSelection from './StyleSelection.jsx'
import TopFitSelection from './TopFitSelection.jsx'
import FitSelection from './FitSelection.jsx'
import PersonalInfoForm from './PersonalInfoForm.jsx'
// import UsualShop from './UsualShop.jsx'

class DataInquiry extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userData : {
				step : 0,
				style : null,
				topFit : null,
				fitPref : null,
				personalInfo: null
			}
		};
	}

	// inputType: which userData are you updating
	// inputVale: what value are you putting in that specific data type
	updateObject(inputType, inputValue){
		// make shallow copy of the state
		const { userData } = this.state;
		userData[inputType] = inputValue;
		this.setState(userData);
	}

	incrementState(){
		const { userData } = this.state;
		userData['step']++;
		this.setState(userData);		
	}

	decrementState(){
		const { userData } = this.state;
		userData['step']--;
		this.setState(userData);
	}

	render() {
		let part = null;
		if(this.state.userData['step'] == 0){
			part = <StyleSelection incrementState={this.incrementState.bind(this)} updateObject={this.updateObject.bind(this)}/>;
		}
		else if(this.state.userData['step'] == 1){
			part = <TopFitSelection incrementState = {this.incrementState.bind(this)} decrementState = {this.decrementState.bind(this)} updateObject = {this.updateObject.bind(this)}/>
		}
		else if(this.state.userData['step'] == 2){
			part = <FitSelection incrementState = {this.incrementState.bind(this)} decrementState = {this.decrementState.bind(this)} updateObject = {this.updateObject.bind(this)}/>	
		}
		else if(this.state.userData['step'] == 3){
			part = <PersonalInfoForm decrementState = {this.decrementState.bind(this)} updateObject = {this.updateObject.bind(this)}/>
			// part = <UsualShop incrementState = {this.incrementState.bind(this)} decrementState = {this.decrementState.bind(this)} updateObject = {this.updateObject.bind(this)} />
		}
		return (
			<div>
				{part}
			</div>
		);
	}
}

class DCBody extends React.Component{
	render() {
		return (
			<div className='BodyWrapper'>
				<div className='ContentWrapper'>
					<DataInquiry/>
				</div>
			</div>
		);
	}
}

class HeaderBar extends React.Component{
	render() {
		return (
			<Navbar className="header">
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Club Männer</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavDropdown className="DivideList" eventKey={1} title="More" id="basic-nav-dropdown">
							<MenuItem eventKey={1.1}>How it works</MenuItem>
							<MenuItem eventKey={1.2}>LookBook</MenuItem>
							<MenuItem eventKey={1.3}>Blog</MenuItem>
						</NavDropdown>
						<NavItem eventKey={2} href="#">Log in</NavItem>
						<NavItem eventKey={3} href="#">Sign Up</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>

		);
	}
}

class DataCollection extends React.Component {
	
	render() {
		return (
			<div>
				<HeaderBar />
				<DCBody />
			</div>
		);
	}
}

export default DataCollection;