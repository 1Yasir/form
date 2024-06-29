// App.js
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';
import { BrowserRouter, Routes, Route , useLocation } from "react-router-dom";
import Header from './jobBoards/pages/Header';
import Home from './jobBoards/pages/Home';
import ActiveJob from "./jobBoards/active/ActiveJob";
import CloseJob from './jobBoards/close/CloseJob';
import JobDetails from './jobBoards/components/JobDetails';
import EditJob from './jobBoards/components/EditJob';
import CreateJob from './jobBoards/components/CreateJob';
import Breadcrumbs from './jobBoards/components/Breadcrumbs';

function Layout() {
  const location = useLocation();
  const showBreadcrumbs = location.pathname !== '/';

  return (
    <>
      <Header />
      {showBreadcrumbs && <Breadcrumbs />}
    </>
  );
}

function App() {
  
  return (
    <BrowserRouter>
       <Layout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/active-jobs' element={<ActiveJob />} />
        <Route path='/active-jobs/create-job' element={<CreateJob />} />
        <Route path='/active-jobs/job-details' element={<JobDetails />} />
        <Route path='/close-jobs/job-details' element={<JobDetails />} />
        <Route path='/active-jobs/job-details/edit' element={<EditJob />} />
        <Route path='/close-jobs' element={<CloseJob />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

