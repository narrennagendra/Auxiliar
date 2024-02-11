import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { FaSearch } from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function MainSearch() {
  return (
    <>
        <Header />
            <form action="#" className="search-form">
            <input type="text" placeholder="Search" className="search-input" />
            <Link to={"/search"}>
                <button className="search-btn"><FaSearch /></button>
            </Link>
          </form>
        <Footer />
    </>
  )
}
