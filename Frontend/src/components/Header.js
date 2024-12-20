import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';
import ROLE from '../common/role';

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log('user header', user);
  const [menuDisplay, setMenuDisplay] = useState(false);
  const menuRef = useRef(null); // Referencia para el menú

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include',
    });

    if (fetchData.ok) {
      window.location.reload();
    }
  };

  // Cierra el menú si haces clic fuera
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuDisplay(false);
      }
    };

    if (menuDisplay) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuDisplay]);

  return (
    <header className="h-16 shadow-md bg-gray-100">
        <div className="h-full container mx-auto flex items-center px-4 justify-between">
            <div>
                <Link to={'/'}>
                    <Logo w={180} h={100} />
                </Link>
            </div>
              
            <div className="flex w-96 h-10 rounded bg-white">
                <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="search"
                    className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none focus:outline-none"
                ></input>
                <button className="rounded bg-yellow-400 px-4 py-2">Search</button>
            </div>
              
            <div className="flex items-center cursor-pointer gap-7">

              <div className="text-2xl relative">
                <span>
                  <FaShoppingCart />
                </span>
                <div className="bg-yellow-400 w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                  <p className="text-sm">0</p>
                </div>
              </div>

              {/* Menú del usuario (FaRegUserCircle) */}

              {
                user?._id && (
                  <div className="relative group flex justify-center" ref={menuRef}>
                  <div
                    className="text-3xl relative flex justify-center"
                    onClick={() => setMenuDisplay((prev) => !prev)}
                  >
                    <FaRegUserCircle />
                  </div>
                  {menuDisplay && (
                      <div className="absolute bg-white bottom-0 top-11 h-fit p-3 shadow-lg rounded">
                          <nav>
                              {
                                user?.role === ROLE.ADMIN && (
                                  <Link
                                    to={'admin-panel'}
                                    className="whitespace-nowrap hover:bg-slate-200 p-2"
                                    onClick={() => setMenuDisplay(false)}>
                                    Admin panel
                                  </Link>
                                )
                              }
                              <button onClick={() => {handleLogout(); setMenuDisplay(false);}} className="whitespace-nowrap hover:bg-slate-200 p-2">
                                Cerrar sesión
                              </button>
                          </nav>
                      </div>
                  )}
                </div>
                )
              }
            
              
              <div>
                {user?._id ? (
                  <button className="hidden">Cerrar sesión</button>
                ) : (
                  <Link
                    to={'/login'}
                    className="px-2 py-2 rounded-md text-[#333] rounded-xl text-lg font-semibold hover:bg-gray-300 font-roboto">
                    Iniciar sesión
                  </Link>
                )}
              </div>
              
            </div>
        </div>
    </header>
  );
};

export default Header;
