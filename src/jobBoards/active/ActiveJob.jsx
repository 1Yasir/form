// ActiveJob.js
import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";
import { cilPlus } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import { CContainer, CRow, CCol, CButton } from "@coreui/react";
import JobCard from './JobCard';
import Breadcrumbs from '../components/Breadcrumbs';

const ActiveJob = () => {
    const [activeJobs, setActiveJobs] = useState(() => JSON.parse(localStorage.getItem('activeJob')) || []);
    const [text, setText] = useState("");

    const handleInput = useCallback((e) => {
        const inputText = e.target.value.trim().toLowerCase();
        setText(inputText);
    }, []);

    useEffect(() => {
        const jobList = JSON.parse(localStorage.getItem("activeJob")) || [];
        setActiveJobs(jobList);
    }, []);

    const filteredJobs = activeJobs.filter(job => 
        job.title.toLowerCase().includes(text) 
        // job.description?.toLowerCase().includes(text) ||
        // job.rate?.toLowerCase().includes(text) ||
        // job.jobTypes?.some(type => type.toLowerCase().includes(text)) ||
        // job.Schedule?.some(schedule => schedule.toLowerCase().includes(text))
    );

    return (
        <div className='jobs py-4'>
            <CContainer>
                <Breadcrumbs />
                <div className='d-flex justify-content-between align-items-center mb-3'>
                    <input
                        type="text"
                        placeholder='Search active jobs..'
                        onInput={handleInput}
                        style={{
                            color: "#202020",
                            borderRadius: "10px",
                            padding: "10px 20px",
                            outline: "none",
                            border: "none",
                            boxShadow: "0 0 1px grey"
                        }}
                    />
                    <Link to="/active-jobs/create-job" className='add_job'>
                        <CIcon icon={cilPlus} className='mx-2' style={{ cursor: "pointer" }} />
                        <span>Add Job</span>
                    </Link>
                </div>
                {filteredJobs.length > 0 && (
                    <CRow sm={{ cols: 1 }} md={{ cols: 3 }}>
                        {filteredJobs.map((job, index) => (
                            <CCol key={index}>
                                <JobCard index={index} job={job} />
                            </CCol>
                        ))}
                    </CRow>
                )}
            </CContainer>
        </div>
    );
};

export default ActiveJob;
