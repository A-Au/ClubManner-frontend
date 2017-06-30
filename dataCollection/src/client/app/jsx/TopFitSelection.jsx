import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'

class TopFitSelection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedTopFit: this.props.selectedTopFit
		};
	}

	goToPrevious(){
		this.props.decrementState();
	}

	updateTopFit(){
		if(this.state.selectedTopFit !== -1){
			this.props.updateObject('topFit',this.state.selectedTopFit);
			this.props.incrementState();
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
					<div className= "col-sm-1"/>
					{ this.state.selectedTopFit === 0 ?
						<div className="col-sm-4 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(0)} className="col-sm-4 selection"></div>
					}
					<div className= "col-sm-2"/>
					{ this.state.selectedTopFit === 1 ?
						<div className="col-sm-4 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(1)} className="col-sm-4 selection"></div>
					}
					<div className= "col-sm-1"/>
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