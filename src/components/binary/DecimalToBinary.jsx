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
    if (/^[0-9]{0,15}[.]?[0-9]{1,15}$/.test(value)) {
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
    let result = '';
    let n = this.state.input;

    let funInteget = (n) => {
      if( n == 1 || n==0 ) {
        result = n.toString() + result;
        return;
      }
      result = ((n%2).toString() + result);
      (n%2 == 0) ? n= n/2 : n= ((n-1) / 2)
      funInteget(n);
    }

    if(this.state.input.indexOf('.') < 0){
      funInteget(n);
    } else {
      let inputArr = String(this.state.input).split('.');
      let partialPart = inputArr[1];
      let fractalDivideResultNumber = partialPart;
      let fractalDivideResultArr = [];

      funInteget(Number(inputArr[0]))
      result += '.';

      let funPartial = (partialIterationsAmount) => {
        fractalDivideResultNumber = (Number('0.' + fractalDivideResultNumber) * 2);
        if (partialIterationsAmount == 50){
          return;
        }
        if(fractalDivideResultNumber >= 1){
          result += 1;
          if (partialIterationsAmount >= String(inputArr[1]).length){
            return;
          }
        }else{
          result += 0;
        }
        fractalDivideResultArr = String(fractalDivideResultNumber).split('.')
        fractalDivideResultNumber = String(fractalDivideResultArr[1]);
        funPartial(partialIterationsAmount+1);
      } 
      funPartial(1);
    }

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