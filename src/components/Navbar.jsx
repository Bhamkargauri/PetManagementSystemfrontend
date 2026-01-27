import { useNavigate } from "react-router";
import petfeetImg from "../assets/pet.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="font-['Comic_Sans_MS'] w-full bg-white px-6 py-4 flex items-center justify-between border-b border-gray-50 sticky top-0 z-50">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src={petfeetImg}
            className="h-auto w-8"
            onClick={() => navigate("/")}
          />
          <span
            className="font-['Pacifico'] text-2xl text-orange-400"
            onClick={() => navigate("/")}
          >
            Petio
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
          <a href="#" className="hover:text-orange-500 transition-colors">
            News
          </a>
          <a href="#" className="hover:text-orange-500 transition-colors">
            Shop
          </a>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-400">
          {/* user profile logo */}

          <button
            className="hover:text-orange-500 transition-colors cursor-pointer"
            onClick={() => navigate("/auth")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          {/* add to cart logo */}
          <button className="hover:text-orange-500 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
          </button>

          {/* search logo */}
          <button className="hover:text-orange-500 transition-colors cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
