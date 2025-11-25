import { Link, useNavigate } from "react-router";

const Navbar = () => {
    const navigate = useNavigate();
    const handleLogOut = () => {
        navigate(`/auth`);
    };

    return (
        <nav className="navbar flex items-center justify-between px-6 py-2 shadow-md bg-white rounded-b-xl">
            <Link to="/">
                <p className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-text">
                    RESUMIND
                </p>
            </Link>

            <div className="flex gap-2 sm:gap-3">
                <Link 
                    to="/upload" 
                    className="primary-button w-fit px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base"
                >
                    Upload Resume
                </Link>
                <button 
                    onClick={handleLogOut} 
                    className="primary-button-out w-fit px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base"
                >
                    Log Out
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
