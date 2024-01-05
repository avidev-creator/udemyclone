import udemylogo from "../pics/udemyLogo.jpg";
import { CiSearch } from "react-icons/ci";
import { RiShoppingCart2Line } from "react-icons/ri";

function Navbar() {
  return (
    <>
      <nav className="mx-auto bg-white w-full h-16 drop-shadow-md">
        <div className="flex flex-row">
          <img
            src={udemylogo}
            alt=""
            className="w-20 m-0 h-16 justify-center"
          />
          <span className="flex mx-2 my-5 h-16 font-light">Categories</span>
          <form className="relative flex mx-4 my-3 w-full max-w-5xl bg-transparent outline-gray-600">
            <div className="relative flex items-center h-9 w-full max-w-5xl mx-1 p-3">
              <CiSearch className="absolute flex h-16 mx-1 my-3 w-5 text-black" />
              <input
                type="text"
                name="search"
                placeholder="Search here"
                className="relative p-5 mr-3 ml-1 h-9 font-light text-gray-500 focus:outline-gray-400 focus:ring-1 bg-transparent border-none rounded-full ring-1 ring-gray-600 w-full max-w-5xl"
              />
            </div>
          </form>
          <span className="flex mx-5 my-5 h-16 pl-45 pr-5 font-light">
            Udemy Business
          </span>
          <span className="flex mx-5 my-5 h-16 font-light">Teach On Udemy</span>
          <span className="flex mx-5 my-5 h-16 justify-center">
            <RiShoppingCart2Line className="flex w-10 mx-1 my-1" />
          </span>
          <button className="flex mx-4 my-3 p-2 h-10 border border-black font-bold">
            Login
          </button>
          <button className="flex mx-1 my-3 p-1.5 h-10 border border-black bg-gray-900 text-white font-bold">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
