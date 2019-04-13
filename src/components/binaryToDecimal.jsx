import { h, Component } from 'preact';
/** @jsx h */

export default class BinaryToDecimal extends Component {
  constructor() {
    super();
    this.state = {
      N: 0,
      result: 0,
      showResult: 'display:none'
    }
    this.translateToDecimal = this.translateToDecimal.bind(this);
  }

  translateToDecimal(props) {
    let n = props.input.length;
    let currentN = n;
    let sum = 0;
    for (let i = 0; i<props.input.length; i++){
      if(props.input[i] == 1) {
        sum = sum += Math.pow(2, currentN-1); 
      }
      currentN -= 1;
    }
    this.setState({
      result: sum,
      showResult: 'display:block'
    });
  }

  render() {
    return <div id="reactBodyComp">
		  <p>Binary to decimal</p>
      <button onClick={()=> this.translateToDecimal(this.props)}>calculate</button>
      <p>Number in binary : {this.props.input}</p>
      <p style={this.state.showResult}>Number in decimal : {this.state.result}</p>
	  </div>;
  }
}