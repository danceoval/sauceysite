import React,  {Component} from 'react'
import { connect } from 'react-redux';

import {sendPayment} from '../redux/action-creators/actions'

class Payment extends Component {
	constructor(props) {
		super(props)
		this.state = {
			ccn : '',
			type : ''
		}

		this.handleCCN = this.handleCCN.bind(this)
		this.handleType = this.handleType.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this)
		console.log('payment props', this.props)
	}

	handleCCN(e) {
		this.setState({ccn: e.target.value})
		
	}

	handleType(e) {
		this.setState({type : e.target.value})
		
	}

	handleSubmit(e) {
		e ? e.preventDefault() : null;
		console.log("gonna dispatch", this.state)
		this.props.sendPayment(this.state)

	}

	render() {

		return (
			<form id="credit-card-form" onSubmit={this.handleSubmit}>
				<h3>Enter Payment Info</h3>
				<br />
				<div>
					<label>CCN</label>
					<input 
						type="text"
						name="ccn"
						onChange={this.handleCCN}
					/>
				</div>
				<br />
				<div>
					<label>Card Type</label>
					<select 
						type="text"
						name="type"
						onChange={this.handleType}
					>
						<option></option>
						<option>MasterCard</option>
						<option>Visa</option>
						<option>Amex</option>
					</select>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
		)
	}

}

const mapState = ({paymentInfo}) => ({ paymentInfo})

const mapDispatch = { sendPayment }

export default connect(null, mapDispatch)(Payment)
