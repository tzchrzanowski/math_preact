import { h, render, Component } from 'preact';
/** @jsx h */

class HeaderComponent extends Component {
  render() {
    return <div class="header">
      <div class="headerItem">
        <span>Header</span>
      </div>
    </div>
  }
}
render(<HeaderComponent />, document.body);