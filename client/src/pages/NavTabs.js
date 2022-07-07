import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#CharacterBuilder"
          onClick={() => handlePageChange('CharacterBuilder')}
          
          className={currentPage === 'CharacterBuilder' ? 'nav-link active' : 'nav-link'}
        >
          Character Builder
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Login"
          onClick={() => handlePageChange('Login')}
          
          className={currentPage === 'Login' ? 'nav-link active' : 'nav-link'}
        >
          Login
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Signup"
          onClick={() => handlePageChange('Signup')}
          
          className={currentPage === 'Signup' ? 'nav-link active' : 'nav-link'}
        >
          Signup
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#SavedCharacters"
          onClick={() => handlePageChange('SavedCharacters')}
          
          className={currentPage === 'SavedCharacters' ? 'nav-link active' : 'nav-link'}
        >
          Saved Characters
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
