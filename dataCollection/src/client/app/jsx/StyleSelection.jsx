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
		this.state = {
			selectedStyle : -1
		};
	}

	updateStyle(){
		if(this.state.selectedStyle !== -1){
			this.props.updateObject('style',this.state.selectedStyle);
			this.props.incrementState();
			// this.state.styleSelect = -1;
		}
	}

	//setstate re-renders so, we have this to render selected part property
	selectStyle(index){
		this.setState({selectedStyle: index})
	}

	render(){
		const { updateObject } = this.props;
		const { incrementState } = this.props
		return(
			<div>
				<div className = "col-sm-12 usrSelection">
					<h1 className="DCH">What best describes your style?</h1>
					{ this.state.selectedStyle === 0 ?
						<div className="col-sm-3 col-md-6 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(0)} className="col-sm-3 col-md-6 selection"></div>
					}
					{ this.state.selectedStyle === 1 ?
						<div className="col-sm-3 col-md-6 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(1)} className="col-sm-3 col-md-6 selection"></div>
					}
					{ this.state.selectedStyle === 2 ?
						<div className="col-sm-3 col-md-6 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(2)} className="col-sm-3 col-md-6 selection"></div>
					}
					{ this.state.selectedStyle === 3 ?
						<div className="col-sm-3 col-md-6 selection selected"></div>
						:
						<div onClick={() => this.selectStyle(3)} className="col-sm-3 col-md-6 selection"></div>
					}

				</div>
				<div className = 'col-sm-12 NavButton'>
					<Button onClick = {this.updateStyle.bind(this) } className='push-right' bsStyle="primary">Next</Button>
				</div>
			</div>
		);
	}
}

export default StyleSelection;