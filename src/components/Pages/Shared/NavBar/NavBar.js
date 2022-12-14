import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo/logo.jpg';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                const user = result.user;
            })
            .then(er => console.error(er));
    }

    const menuItems = <>


        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.email ?
                <>
                    <li className='font-semibold'><Link to='/clientReviews'>MyReviews</Link></li>
                    <li onClick={handleLogOut} className='font-semibold'><Link>Logout</Link></li>
                    <Link to='/profile' className='my-auto'>
                        {user?.photoURL ?
                            <>
                                <img className='btn btn-circle border-none'
                                    src={user?.photoURL} alt='' />
                                <p>{user?.displayName}</p>
                            </>
                            : <div className='text-center'>
                                <p>{user?.displayName}</p>
                                <FaUser className='bg-white mb-4'></FaUser>
                            </div>
                        }
                    </Link>
                </>
                :
                <>
                    <li className='font-semibold'><Link to='/login'>Login</Link></li>
                    <li className='font-semibold'><Link to='/register'>Register</Link></li>
                </>
        }
    </>

    return (
        <div className="navbar h-20 mb-10 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to='/' className="btn btn-ghost border-none h-10 w-28 ">
                    <img className='w-full h-full rounded-md' src={logo} alt="" />
                </Link>
                <h4 className='text-xl font-sans font-semibold text-gray-600'>M0DD???51R's Photography</h4>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal pr-5">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;