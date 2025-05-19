import React from 'react';

export function Header ({pageName}) {
  return (
    <header>
      <h1>{pageName}</h1>
      <nav>
        <ul>
          <li><a href="/Country-Stats/">Search Page</a></li>
          <li><a href="/Country-Stats/About-Us">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}
