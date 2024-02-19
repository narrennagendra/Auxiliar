/* eslint-disable no-mixed-spaces-and-tabs */
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header className="container header">
	      <a href="#" className="logo">Auxiliar</a>
        <nav className="navbar">
          <form action="#" className="search-form">
            <input type="text" placeholder="Search" className="search-input" />
            <Link to={"/"}>
              <button className="search-btn"><FaSearch color='black' /></button>
            </Link>
          </form>
          <button className="btn">Logout</button>
        </nav>
        </header>
    </>
  )
}
