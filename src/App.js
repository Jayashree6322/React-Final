import { React } from 'react';
import './App.scss';
import SimpleButton from './components/simpleButton';

const App = ({ state: { count, refreshID }}) =>
	<div className="App">
		<div>Count: { count }</div>
		<div>{ SimpleButton() }</div>
		<div>Refresh ID: { refreshID }</div>
		<div>Hello All</div>
		<div>Welcome to my page</div>
		<p><span>
			<div>1</div>
			<div>2</div>
			<div>3</div>
			<div>4</div>
			<div>5</div>
			<div>6</div>
			<div>7</div>
			<div>8</div>
			<div>9</div>
			<div>10</div>
		</span></p>
	</div>;

export default App;
