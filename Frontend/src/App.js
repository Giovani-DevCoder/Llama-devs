import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import { useDispatch } from 'react-redux';
import { setUserDetails } from './store/userslice';

function App() {
  const dispatch = useDispatch()

  const fetchUserDetails = async()=> {
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : "include"
    });

    const dataApi = await dataResponse.json();

    if(dataApi.success){
      dispatch(setUserDetails(dataApi.data))
    }

    console.log("data-user",dataResponse)

  }

  useEffect(()=>{
    fetchUserDetails()

  },[]);

  return (
    <>
    <Context.Provider value ={{
        fetchUserDetails  // user detail fetch
    }}>
      <Header/>
      <main className='bg-[#469ff1] min-h-[calc(100vh-100px)]'>
        <Outlet/>
      </main>
      <Footer/>
    </Context.Provider>
      </>
  );
}

export default App;
