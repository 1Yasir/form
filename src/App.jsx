import React from 'react';
import Form from './jobBoards/components/Form';
import '@coreui/coreui/dist/css/coreui.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActiveJob from './jobBoards/active/ActiveJob';
import Header from './jobBoards/pages/Header';
import Home from './jobBoards/pages/Home';
import JobDetails from './jobBoards/components/JobDetails';
import EditJob from './jobBoards/components/EditJob';
import CreateJob from './jobBoards/components/CreateJob';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/active-jobs' element={<ActiveJob />} />
        <Route path='/active-jobs/create-job' element={<CreateJob />} />
        <Route path='/active-jobs/job-details' element={<JobDetails />} />
        <Route path='/active-jobs/job-details/edit' element={<EditJob />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
