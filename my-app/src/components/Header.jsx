import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Job Finder</h1>
      <input
        type="text"
        placeholder="Search by title or company"
        className="p-2 rounded border"
      />
      <nav>
        <Link to="/" className="ml-4">Home</Link>
      </nav>
    </header>
  );
}
export default Header;