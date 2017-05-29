import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

class StyleSelection extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<div className = "col-sm-12 usrSelection">
					<h1 className="DCH">What best describes your style?</h1>
					<div className="col-sm-3 selection"></div>
					<div className="col-sm-3 selection"></div>
					<div className="col-sm-3 selection"></div>
					<div className="col-sm-3 selection"></div>
				</div>
				<div className = 'col-sm-12 NavButton'>
					<Button className='push-right' bsStyle="primary">Next</Button>
				</div>
			</div>
		);
	}
}

export default StyleSelection;