import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SummaryApi from '../common';



const Header = () => {
  const user = useSelector(state => state?.user?.user)
  console.log("user header",user)

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: 'include',
    });
  
    if (fetchData.ok) {
      window.location.reload();
    }
  };
  
  return (
    <header className='h-16 shadow-md bg-blue-500'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div className=''>
          <Link to={"/"}>
            < Logo w={180} h={100}/>
          </Link>
        </div>

      
        <div className='flex items-center cursor-pointer gap-7'>


          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='px-10 py-2 rounded-md text-[#333] rounded-xl text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 font-roboto shadow-inset-custom'>Cerrar sesion</button>
              )
              : (
              <Link to={"/login"}className='px-10 py-2 rounded-md text-[#333] rounded-xl text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 font-roboto shadow-inset-custom'
              >Iniciar sesion</Link>
              )
            }
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header