import * as React from 'react';
import { Link } from 'react-router-dom';

export class MenuBar extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu2">Menu2</Link></li>
      </ul>
    );
  }
}