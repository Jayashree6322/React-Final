import { React } from 'react';
import './App.scss';
// eslint-disable-next-line no-magic-numbers
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const App = () =>
	<div className="App">
		{ /* { num.map((number, index) =>
			<div key={ index }>{ number }</div>) }*/ }
		{ num.map((number, index) =>
			<span key={ index }>{ number }</span>) }
	</div>;

export default App;
