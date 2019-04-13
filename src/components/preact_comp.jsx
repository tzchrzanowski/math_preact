import { h, render, Component } from 'preact';
import BinaryToDecimal from './binaryToDecimal.jsx';
/** @jsx h */

class Asd extends Component {
  render() {
    return <div id="reactBodyComp">
		  <span>Binary Calculations</span>
      <BinaryToDecimal input='101'/>
	  </div>;
  }
}
render(<Asd />, document.body);