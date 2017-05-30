import React from 'react';
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavItem } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { MenuItem } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ButtonToolbar } from 'react-bootstrap'

class FitSelection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			selectedFit: -1
		};
	}

	goToPrevious(){
		this.props.decrementState();
	}

	updateFit(){
		if(this.state.selectedFit !== -1){
			this.props.updateObject('fitPref',this.state.selectedFit);
			this.props.incrementState();
			// this.state.styleSelect = -1;
		}
	}

	selectStyle(index){
		this.setState({selectedFit:index})
	}

	render(){
		const { decrementState } = this.props
		const { incrementState } = this.props
		const { updateObject } = this.props
		return(
			<div>
				<div className="col-sm-12 ">
					<h1 className="DCH">What is your preferred fit?</h1>
					<div className= "col-sm-2"/>
					{ this.state.selectedFit === 0 ?
						<div className="col-sm-2 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(0)} className="col-sm-2 selection"></div>
					}
					<div className= "col-sm-1"/>
					{ this.state.selectedFit === 1 ?
						<div className="col-sm-2 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(1)} className="col-sm-2 selection"></div>
					}
					<div className= "col-sm-1"/>
					{ this.state.selectedFit === 2 ?
						<div className="col-sm-2 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(2)} className="col-sm-2 selection"></div>
					}
					<div className= "col-sm-2"/>
				</div>

				<div className = 'col-sm-12 NavButton'>
					<ButtonToolbar>
						<Button onClick = {this.updateFit.bind(this)} className='push-right' bsStyle="primary">Next</Button>
						<Button onClick = {this.goToPrevious.bind(this)} className='push-right'>Back</Button>
					</ButtonToolbar>
				</div>
			</div>
		);
	}
}

export default FitSelection;