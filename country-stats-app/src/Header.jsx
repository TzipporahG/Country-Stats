import { Link } from 'react-router-dom';
import React from 'react';

export function Header ({pageName}) {
  return (
    <header>
      <h1>{pageName}</h1>
      <nav>
        <ul>
          <li><Link to="/Country-Stats">Search Page</Link></li>
          <li><Link to="/Country-Stats/about-us">About Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}
