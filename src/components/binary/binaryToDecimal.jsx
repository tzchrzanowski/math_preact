import { h, Component } from 'preact';
/** @jsx h */

export default class BinaryToDecimal extends Component {
  constructor() {
    super();
    this.state = {
      N: 0,
      result: 0,
      showResult: 'display:none',
      input: 0,
      disabledButton: true,
    }
    this.translateBinaryToDecimal = this.translateBinaryToDecimal.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  translateBinaryToDecimal() {
    let sum = 0;
    let fractal = false;
    if(this.state.input.indexOf('.') > -1){
      fractal = true;
    }
    if (!fractal){
      let n = this.state.input.length;
      let currentN = n;

      for (let i = 0; i< this.state.input.length; i++){
        if(this.state.input[i] == 1) {
          sum = sum += Math.pow(2, currentN-1); 
        }
        currentN -= 1;
      }
    } else {
      let inputArr = this.state.input.split('.');
      let integerPart = inputArr[0];
      let fractalPart = inputArr[1];
      let integerPartLength = integerPart.length;
      for (let i = 0; i< integerPart.length; i++){
        if(integerPart[i] == 1) {
          sum = sum + Math.pow(-2, integerPartLength-1); 
        }
        integerPartLength -= 1;
      }
      let fullFractalResult = 0;
      for (let i = 0; i< fractalPart.length; i++){
        if(fractalPart[i] == 1) {
          fullFractalResult = fullFractalResult + Math.pow(2, -(i+1));
        }
      }
      let fullFractalResultArr = String(fullFractalResult).split('.');
      sum += `.${fullFractalResultArr[1]}`;
    }

    this.setState({
      result: sum,
      showResult: 'display:block'
    });
  }

  getInputValue(value) {
    if (/^[01]{0,15}[.]?[01]{1,15}$/.test(value)) {
      this.setState({
        input: value,
        disabledButton: false,
      })
    } else {
      this.setState({
        input: "Only these characters are allowed: '0', '1' and single '.'",
        disabledButton: true,
      })
    }
  }

  render() {
    return <div class="binaryItem">
		  <p>Binary to Decimal:</p>
      <input 
        type='number'
        value={this.state.input}
        onChange={(e) => this.getInputValue(e.target.value)}>
      </input>
      {this.state.disabledButton ? 
        <button disabled>calculate</button>
        :
        <button onClick={()=> this.translateBinaryToDecimal()}>calculate</button>
      }
      <p>Number in binary : {this.state.input}</p>
      <p style={this.state.showResult}>Number in decimal : {this.state.result}</p>
	  </div>;
  }
}