import { h, render, Component } from 'preact';
import Header from './Header.jsx';
import BinaryParent from './binary/BinaryParent.jsx';
import LandingPage from './landing_page.jsx';
/** @jsx h */

class FirstOrder extends Component {
  render() {
    return <div class="FirstOrder">
      <Header />
      <LandingPage />
      <BinaryParent />
	  </div>;
  }
}
render(<FirstOrder />, document.body);