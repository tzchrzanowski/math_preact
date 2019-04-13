import './components/preact_comp.jsx';
import './stylesheets/style.css';

function component() {
  let element = document.createElement('div');
  element.setAttribute("id", "preactStartPoint");
  return element;
}
document.body.appendChild(component());