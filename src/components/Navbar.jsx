import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import {
  HiOutlineUser,
  HiOutlineHeart,
  HiOutlineShoppingCart,
} from "react-icons/hi";
import avatarImg from "../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { useFetchAllBooksQuery } from "../redux/features/books/booksApi";

const navigation = [
  { name: "Dashboard", href: "/user-dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const { currentUser, logOut } = useAuth();

  //  Fetch Books from API
  const { data: books, isLoading, error } = useFetchAllBooksQuery();
  console.log("Fetched Books:", books);

  const handleLogOut = () => {
    logOut();
  };
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  //  Handle Book Click to navigate to SingleBook Page
  const handleBookClick = (bookId) => {
    console.log("Navigating to book ID:", bookId);
    navigate(`/books/${bookId}`);
    setSearchQuery("");
    setFilteredBooks([]);
  };

  //  Search Function
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (books.length > 0 && query.length > 0) {
      const filtered = books.filter((book) =>
        book.title?.toLowerCase().includes(query)
      );
      setFilteredBooks(filtered);
      console.log("Filtered Books:", filtered);
    } else {
      setFilteredBooks([]);
    }
  };

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to="/">
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>

          {/* search input */}
          <div className="relative sm:w-72 w-40">
            <input
              type="text"
              placeholder="Search books..."
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
              value={searchQuery}
              onChange={handleSearch} //  Search Trigger
            />
            <IoSearchOutline className="absolute inline-block right-3 inset-y-2" />

            {/* 🔹 Search Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-10 left-0 w-full bg-white shadow-md rounded-md z-40">
                {isLoading ? (
                  <p className="px-4 py-2 text-gray-500">Loading...</p>
                ) : error ? (
                  <p className="px-4 py-2 text-red-500">Error fetching books</p>
                ) : filteredBooks.length > 0 ? (
                  filteredBooks.map((book) => (
                    <div
                      key={book._id}
                      className="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleBookClick(book._id)} // Handle Book Click
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

        {/* right side */}
        <div className="relative flex items-center md:space-x-3 space-x-2">
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <img
                    src={avatarImg}
                    alt="Avatar"
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/* Show dropdown */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li
                          key={item.name}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <button
                          onClick={handleLogOut}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : token ? (
              <Link to="/dashboard" className="border-b-2 border-primary">
                Dashboard
              </Link>
            ) : (
              <Link to="/login">
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="hidden sm:block">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <HiOutlineShoppingCart className="" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
