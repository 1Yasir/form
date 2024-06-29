import React from 'react';
import JobList from '../layout/JobList';

function ActiveJob() {
  return (
    <JobList localStorageKey="activeJob" addJobLink="/active-jobs/create-job" />
  )
}

export default ActiveJob