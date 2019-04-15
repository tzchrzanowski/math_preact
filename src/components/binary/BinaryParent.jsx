import { h } from 'preact';
import BinaryToDecimal from './binaryToDecimal.jsx';
import DecimalToBinary from './DecimalToBinary.jsx';
/** @jsx h */

export default function BinaryParent() {
  return <div class="BinaryParent">
		<div class="sectionHeader">
      <span>Binary Calculations</span>
    </div>
    <BinaryToDecimal />
    <DecimalToBinary />
  </div>
}

