import React, { useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { navItems, authLink } from '../constants/data'
import { Menu, X } from 'lucide-react'
import ModeCtrl from './ModeCtrl'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
    <nav className='backdrop-blur-lg sticky'>
        <div className='container'>
            <div className="nav_wrapper">
                <div className="logo">
                    <span className='logo_simbol'>
                        <span className='logo_dot'></span>
                    </span>
                    <span className="logo_title lg:text-xl md:text-lg">AceDot.Dev</span>
                </div>
                <ul className="navi hidden lg:flex">
                    {
                        navItems.map((item, idx)=> (
                            <li key={idx}>
                                <Link to={item.to}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="sub_link_wrapper flex items-center">
                    <div className='sub_links hidden lg:flex'>
                        {
                            authLink.map((item, idx)=> (
                                <Link className={`${
                                    idx === 1 && 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'
                                }`}
                                key={idx} to={item.to} >{item.label}</Link>
                            ))
                        }
                    </div>
                    <div className="menu_icon lg:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {
                                mobileMenuOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                    <ModeCtrl />
                </div>
            </div>

            {/* mobileMenuOpen True 일때 생성 */}
            {
                mobileMenuOpen && (
                    <div className="sub_nav_mobile absolute dark:bg-neutral-900 bg-white w-full top-full left-0 mt-[1px] lg:hidden">
                        <ul className="navi">
                            {
                                navItems.map((item, idx)=> (
                                    <li key={idx} className='py-4 border-b border-neutral-600 w-full text-center'>
                                        <Link className='block w-full h-full'
                                        to={item.to}>{item.label}</Link>
                                    </li>
                                ))
                            }
                            <div className='sub_links lg:flex flex py-4 gap-2 justify-center border-b border-neutral-600'>
                            {
                                authLink.map((item, idx)=> (
                                    <Link className={`${
                                        idx === 1 && 'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white'
                                    }`}
                                    key={idx} to={item.to} >{item.label}</Link>
                                ))
                            }
                            </div>
                        </ul>
                    </div>
                )
            }
            
        </div>
    </nav>
  )
}

export default Navbar