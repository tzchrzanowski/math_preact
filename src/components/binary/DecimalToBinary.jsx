import { h, Component } from 'preact';
/** @jsx h */

export default class DecimalToBinary extends Component {
  constructor() {
    super();
    this.state = {
      N: 0,
      result: 0,
      showResult: 'display:none',
      input: 0,
      disabledButton: true,
    }
    this.getInputValue = this.getInputValue.bind(this);
    this.translateDecimalToBinary = this.translateDecimalToBinary.bind(this);
  }

  getInputValue(value) {
    if (/^[01.]{0,30}$/.test(value)) {
      this.setState({
        input: value,
        disabledButton: false,
      })

    } else {
      this.setState({
        input: "Only these characters are allowed: '0', '1', '.'",
        disabledButton: true,
      })
    }
  }

  translateDecimalToBinary(){
    console.log('do nothing yet');
  }

  render() {
    return <div class="binaryItem">
		  <p>Decimal to Binary:</p>
      <input 
        type='number'
        value={this.state.input}
        onChange={(e) => this.getInputValue(e.target.value)}>
      </input>
      {this.state.disabledButton ? 
        <button disabled>calculate</button>
        :
        <button onClick={()=> this.translateDecimalToBinary()}>calculate</button>
      }
      <p>Number in Decimal : {this.state.input}</p>
      <p style={this.state.showResult}>Number in Binary : {this.state.result}</p>
	  </div>;
  }
}