// App.js
import React from 'react';
import Form from './jobBoards/components/Form';
import '@coreui/coreui/dist/css/coreui.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveJob from './jobBoards/active/ActiveJob';
import Header from './jobBoards/pages/Header';
import Home from './jobBoards/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/active-jobs/create-job' element={<Form />} />
        <Route path='/active-jobs' element={<ActiveJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
