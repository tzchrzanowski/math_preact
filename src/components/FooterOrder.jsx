import { h, render, Component } from 'preact';
/** @jsx h */

class FooterOrder extends Component {
  render() {
    return <div class="footer">
      <div class="footerItem">
        <span>Footer</span>
      </div>
	  </div>;
  }
}
render(<FooterOrder />, document.body);