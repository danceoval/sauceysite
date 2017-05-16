import React, {Component} from 'react';
import SaucePic from './SaucePic';
import Payment from './Payment';

export default ({selectedSauce, saucesToList, setSauce, whenSubmitted}) => {
	console.log('props in sauce container', this)
	return (
		<div>
				{	selectedSauce ? <SaucePic sauce={selectedSauce} /> : <h3>Select a Sauce</h3>
				}
				<div>
					<label>
					Select a Hot Sauce:
					<select onChange={(e) => {setSauce(e.target.value)}}>
						<option value="">None</option>
						{
							saucesToList.map((sauce, idx) => {
								return <option value={sauce} key={idx}>{sauce}</option>
							})
						}
					</select>
					</label>
				</div>
				{
					selectedSauce? <Payment  /> : <div></div>
				}
		</div>
	)
}

// export default class extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.handleChange = this.handleChange.bind(this);
// 	}

// 	handleChange(event) {
// 		this.props.setSauce(event.target.value)
// 	}



// 	render() {
// 		return (
			// <div>
			// 	{	this.props.selectedSauce ? <SaucePic sauce={this.props.selectedSauce} /> : <h3>Select a Sauce</h3>
			// 	}
			// 	<div>
			// 		<label>
			// 		Select a Hot Sauce:
			// 		<select onChange={this.handleChange}>
			// 			<option value="">None</option>
			// 			{
			// 				this.props.saucesToList.map((sauce, idx) => {
			// 					return <option value={sauce} key={idx}>{sauce}</option>
			// 				})
			// 			}
			// 		</select>
			// 		</label>
			// 	</div>
			// 	{
			// 		this.props.selectedSauce? <Payment whenSubmitted={this.props.whenSubmitted} /> : <div></div>
			// 	}
			// </div>

// 		)
// 	}


// }