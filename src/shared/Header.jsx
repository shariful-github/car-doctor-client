import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                console.log('Sign-out successful');
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className="navbar bg-base-100 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Blog</Link></li>
                        {user?.email ? <li><Link onClick={handleLogout}>Log out</Link></li> :
                            <li><Link to={'/login'}>Login</Link></li>}
                    </ul>
                </div>
                <Link>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex mr-24">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-lg mr-5'><Link to={'/'}>Home</Link></li>
                    <li className='font-semibold text-lg mr-5'><Link>About</Link></li>
                    <li className='font-semibold text-lg mr-5'><Link>Services</Link></li>
                    <li className='font-semibold text-lg mr-5'><Link>Blog</Link></li>
                    {user?.email ? <li className='font-semibold text-lg mr-5'><Link onClick={handleLogout}>Log out</Link></li> :
                        <li className='font-semibold text-lg mr-5'><Link to={'/login'}>Login</Link></li>}
                </ul>
            </div>
            <div className="navbar-end">
                <Link className='mr-4 text-2xl'><HiOutlineShoppingBag /></Link>
                <Link className='mr-4 text-2xl'><IoMdSearch /></Link>
                <button className="btn btn-outline border-[#FF3811] text-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811] px-6 font-semibold text-lg">Appionment</button>
            </div>
        </div>
    );
};

export default Header;