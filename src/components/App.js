import React, {Component} from 'react';
import { connect } from 'react-redux';

import SauceContainer from './SauceContainer'
import {setSauce, sendPayment} from '../redux/action-creators/actions'
import store from '../redux/main';

class App extends Component {
	constructor(props) {
		super(props);
		
	}


	render() {
		console.log("props in app", this.props)
		let adj = 'Silly';
		return(
			<div>
				<h1>A Somewhat {adj} Site</h1> 
				<SauceContainer 
					saucesToList={this.props.sauces}
					selectedSauce = {this.props.sauce} 
					setSauce = {this.props.setSauce}
				/>
			</div>
		)
	}

}

const mapState = ({ sauce, sauces, paymentInfo }) => ({sauce, sauces, paymentInfo})

const mapDispatch = { setSauce, sendPayment }

export default connect(mapState, mapDispatch)(App)





