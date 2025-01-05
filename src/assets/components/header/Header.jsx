import { FaRegUserCircle } from "react-icons/fa";


const Header = () => {
    return (
        <div>
            <nav className="flex justify-between items-center">
                <h1 className="text-[#150B2B] text-4xl font-bold">Recipe Calories</h1>
                <div>
                    <ul className="flex gap-3 hidden md:inline-flex text-[#150B2BB3] ">
                        <li>Home</li>
                        <li>Recipes</li>
                        <li>About</li>
                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                <label className="input hidden md:inline-flex bg-[#150B2B0D] border rounded-xl p-2 input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
                </label>
                <p className="p-3 bg-[#0BE58A] border rounded-full"><FaRegUserCircle /></p>
                </div>
            </nav>
        </div>
    );
};

export default Header;