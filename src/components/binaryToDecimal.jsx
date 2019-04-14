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
    this.translateToDecimal = this.translateToDecimal.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
  }

  translateToDecimal() {
    console.log('asd')
    console.log(this.state.input)
    let n = this.state.input.length;
    let currentN = n;
    let sum = 0;
    for (let i = 0; i< this.state.input.length; i++){
      if(this.state.input[i] == 1) {
        sum = sum += Math.pow(2, currentN-1); 
      }
      currentN -= 1;
    }
    this.setState({
      result: sum,
      showResult: 'display:block'
    });
  }

  getInputValue(value) {
    console.log(value);
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

  render() {
    return <div id="reactBodyComp">
		  <p>Binary to decimal</p>
      <input 
        type='number'
        pattern="[01.]{0,30}"
        value={this.state.input}
        onChange={(e) => this.getInputValue(e.target.value)}>
      </input>
      {this.state.disabledButton ? 
        <button onClick={()=> this.translateToDecimal()} disabled>calculate</button>
        :
        <button onClick={()=> this.translateToDecimal()}>calculate</button>
      }
      <p>Number in binary : {this.state.input}</p>
      <p style={this.state.showResult}>Number in decimal : {this.state.result}</p>
	  </div>;
  }
}