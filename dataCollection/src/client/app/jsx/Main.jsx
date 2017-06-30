import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'

import DataCollection from './DataCollection.jsx';
import NonMember from './NonMember.jsx';

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

class Main extends React.Component{
    constructor(props){
		super(props);
		this.state = {
            page: 'Non Member'
            // page: 'Data Collection'
		};
	}
    getPage() {
        const { page } = this.state;
        if (page == 'Non Member') {
            return <NonMember />;
        }
        else if (page == 'Data Collection') {
            return <DataCollection />
        }
    }

	render() {
		return (
			<div>
				<HeaderBar />
				{this.getPage()}
			</div>
		);
	}
}

export default Main;