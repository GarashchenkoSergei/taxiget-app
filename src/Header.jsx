import React from 'react'

export const Header = props => {
  const { navItems, navigateTo } = props;
  return <>
    <header>
      <nav>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <button onClick={() => navigateTo(item)}>
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  </>
}