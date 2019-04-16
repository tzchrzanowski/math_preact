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
    if (/^[0-9]{0,30}$/.test(value)) {
      this.setState({
        input: value,
        disabledButton: false,
      })

    } else {
      this.setState({
        input: "Only combination of numbers '0-9' is allowed",
        disabledButton: true,
      })
    }
  }

  translateDecimalToBinary(){
    let n = this.state.input;
    let result = '';
    let fun = (n) => {
      if( n == 1 || n==0 ) {
        result = n.toString() + result;
        return;
      }
      result = ((n%2).toString() + result);
      (n%2 == 0) ? n= n/2 : n= ((n-1) / 2)
      fun(n);
    }
    fun(n);
    this.setState({
      result: result,
      showResult: 'display:block'
    })
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