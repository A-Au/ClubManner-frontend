import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'


import StyleSelection from './StyleSelection.jsx'

class DataInquiry extends React.Component{
	constructor(props){
		super(props);
		this.state = {step : 1};
	}
	render() {
		let part = null;
		if(this.state.step == 1){
			part = <StyleSelection />;
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
		
			// <div className = 'header'>
			// 	<div className = 'logoCM'>
			// 		ClubMänner
			// 	</div>
			// 	<div className = 'btn-sets'>
			// 		<ul className='rightItem'>
			// 			<li className='hdrMenu Desc'>How it works</li>
			// 			<li className='hdrMenu LookBook'> LookBook</li>
			// 			<li className='hdrMenu Blog'>Blog</li>
			// 			<li className='hdrMenu LogIn'>Log in</li>
			// 			<li className='hdrMenu SignUp'>Sign Up</li>							
			// 		</ul>
			// 	</div>
			// </div>
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