import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.js';
import './index.less';

ReactDOM.render(
	<Main />,
	document.querySelector('#app')
);

if(module.hot) module.hot.accept();