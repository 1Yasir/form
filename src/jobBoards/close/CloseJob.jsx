import React from 'react';
import JobList from '../layout/JobList';

function CloseJob() {
    return (
        <JobList localStorageKey="closeJob" addJobLink="/close-jobs/create-job" />
    )
}

export default CloseJob