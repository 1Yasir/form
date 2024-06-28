import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Form from './Form';


function EditJob() {
     const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const jobId = queryParams.get('id');
    const activeJob = JSON.parse(localStorage.getItem("activeJob"));
    const initialValues = activeJob[jobId];
    const editJob = true;


    return (
        <div>
            <Form pageTitle="Edit Job" initialValues={initialValues} isEdit={editJob} index={jobId} />
        </div>
    )
};

export default EditJob;