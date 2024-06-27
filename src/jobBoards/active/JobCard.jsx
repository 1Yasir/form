import React, { useEffect, useState, memo } from 'react';
import { Link } from "react-router-dom";
import { cilPlus, cilStar } from "@coreui/icons";
import CIcon from '@coreui/icons-react';
import { formatDistanceToNow } from 'date-fns';
import { CCol, CCard, CCardBody, CCardTitle, CCardFooter, CButton } from "@coreui/react";

const JobCard = memo(({ job, index }) => {
    const [isNew, setIsNew] = useState(false);
    const htmlContent = job.editorContent;

    useEffect(() => {
        const postTime = new Date(job.submitDate);
        const diffInDays = (new Date() - postTime) / (1000 * 60 * 60 * 24);
        setIsNew(diffInDays < 30);
    }, [job.submitDate]);

    return (
        <CCard className="mb-4 jobCard">
            <CCol className='p-3 '>
                <CButton className='border text-dark fw-bold mb-3'>{isNew ? "New" : "Old"}</CButton>
                <h2 className='mb-3 text-capitalize'>{job.title}</h2>
                <p><strong>Outlier Ai 2.0 <CIcon icon={cilStar} /></strong></p>
                <address>Lahore, Punjab</address>
                <CCol className='overflow-hidden' style={{ height: "80px" }}>
                    {[job.rate, job.jobTypes[0], job.Schedule[0]].map((btn, i) => (
                        <CButton color="light" className='border text-dark fw-bold me-2 text-capitalize mb-1' key={i}>{btn}</CButton>
                    ))}
                </CCol>
            </CCol>
            <CCardBody className='overflow-hidden'>
                <div dangerouslySetInnerHTML={{ __html: htmlContent }} className='overflow-hidden mb-3' style={{ height: "180px" }} />
                <p>{formatDistanceToNow(new Date(job.submitDate), { addSuffix: true })}</p>
            </CCardBody>
            <CCardFooter className='border-0 d-flex justify-content-between align-items-center p-0'>
                <Link to={`job-details?id=${index}`} className='btn w-100 rounded-0 fw-bold job_details'>View Job</Link>
            </CCardFooter>
        </CCard>
    );
});

export default JobCard;
