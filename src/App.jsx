import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { fetchDataFromApi } from './utils/api';


import { getApiConfiguration } from './store/homeSlice';
import { useSelector, useDispatch } from 'react-redux';

//importing Pages and Components
import { Home, Details, Explore, SearchResult, Error } from "./pages/index";
import { Footer, Header } from './components/index';

function App() {
  
  const dispatch = useDispatch();
  const  { url } = useSelector((state) => state.home);
  
    useEffect(() => {
      fetchApiConfig();
    }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi('/configuration').then((res) => {
            console.log(res);

            const url = {
              backdrop: res.images?.secure_base_url + "original",
              poster: res.images?.secure_base_url + "original",
              profile: res.images?.secure_base_url + "original",
            }
            dispatch(getApiConfiguration(url));
        });
  }

  return (
    <BrowserRouter> 
      <Header/>   
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/:mediaType/:id' element={ <Details/> }/>
          <Route path='/search/:query' element={ <SearchResult/> }/>
          <Route path='/explore/:mediaType' element={ <Explore/> }/>
          <Route path='*' element={ <Error/> }/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

