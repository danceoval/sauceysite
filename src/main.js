import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/App';
import store from './redux/main';

require('../scss/main.scss');

ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('app')
)