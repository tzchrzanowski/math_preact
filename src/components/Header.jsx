import { h, render, Component } from 'preact';
/** @jsx h */

class HeaderComponent extends Component {
  render() {
    return <div class="header">
      <div class="headerItem">
        <span>Math</span>
      </div>
      <div class="headerItem firstRight">
        <span>Binary</span>
      </div>
      <div class="headerItem">
        <span>Arithmetic</span>
      </div>
    </div>
  }
}
render(<HeaderComponent />, document.body);