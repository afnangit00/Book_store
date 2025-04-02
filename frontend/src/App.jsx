import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateBooks from './pages/CreateBooks';
import DeleteBooks from './pages/DeleteBooks';
import EditeBooks from './pages/EditeBooks';
import ShowBooks from './pages/ShowBooks';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/delete/:id' element={<DeleteBooks/>}/>
      <Route path='/books/edit/:id' element={<EditeBooks/>}/>
      <Route path='/books/details/:id' element={<ShowBooks/>}/>
    </Routes>
  )
}

export default App