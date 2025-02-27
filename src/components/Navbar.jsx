import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useFetchAllBooksQuery } from "../redux/features/books/booksApi";
import SkeletonLoaderSinglebook from "../pages/books/SkeletonLoaderSinglebook";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logOut } = useAuth();
  const { data: books, isLoading, error } = useFetchAllBooksQuery();

  const navigate = useNavigate();

  const handleLogOut = () => logOut();
  const token = localStorage.getItem("token");

  const handleBookClick = (bookId) => {
    navigate(`/books/${bookId}`);
    setSearchQuery("");
    setFilteredBooks([]);
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (books?.length > 0 && query.length > 0) {
      setFilteredBooks(
        books.filter((book) => book.title?.toLowerCase().includes(query))
      );
    } else {
      setFilteredBooks([]);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-7 text-gray-700" />
          </Link>

          <div className="relative sm:w-80 w-48">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full py-2 px-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={handleSearch}
            />
            <IoSearchOutline className="absolute right-3 top-3 text-gray-500 size-5" />

            {searchQuery && (
              <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-lg z-40 overflow-hidden">
                {isLoading ? (
                  // <p className="px-4 py-2 text-gray-500">Loading...</p>
                  <SkeletonLoaderSinglebook />
                ) : error ? (
                  <p className="px-4 py-2 text-red-500">Error fetching books</p>
                ) : filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div
                      key={book._id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleBookClick(book._id)}
                    >
                      {book.title}
                    </div>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {currentUser ? (
            <div className="relative" ref={dropdownRef}>
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <img
                  src={avatarImg}
                  alt="Avatar"
                  className="size-8 rounded-full ring-2 ring-blue-500"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-lg z-50">
                  <ul className="py-2">
                    {navigation.map((item) => (
                      <li
                        key={item.name}
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : token ? (
            <Link
              to="/dashboard"
              className="text-blue-500 font-medium border-b-2 border-blue-500"
            >
              Dashboard
            </Link>
          ) : (
            <Link to="/login">
              <HiOutlineUser className="size-7 text-gray-700" />
            </Link>
          )}

          <button className="hidden sm:block">
            <HiOutlineHeart className="size-7 text-gray-700" />
          </button>

          <Link
            to="/cart"
            className="bg-blue-500 p-2 px-4 flex items-center rounded-lg text-white"
          >
            <HiOutlineShoppingCart className="size-6" />
            {cartItems.length > 0 ? (
              <span className="ml-2 text-sm font-semibold">
                {cartItems.length}
              </span>
            ) : (
              <span className="ml-2 text-sm font-semibold">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
