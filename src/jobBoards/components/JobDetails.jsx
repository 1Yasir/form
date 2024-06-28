import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CIcon from '@coreui/icons-react';
import { cilArrowRight } from "@coreui/icons";
import { ToastContainer, toast } from 'react-toastify';
import {
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CCol
} from "@coreui/react";
import Breadcrumbs from './Breadcrumbs';

function JobDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const jobId = queryParams.get('id');
  const [activeJob, setActiveJob] = useState(JSON.parse(localStorage.getItem('activeJob')) || []);
  const closeJob = JSON.parse(localStorage.getItem("closeJob")) || [];

  const currentJob = activeJob[jobId];
  const jobStatus = JSON.parse(localStorage.getItem("job-status"));
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState('light');
  const htmlContent = currentJob?.editorContent;

  useEffect(() => {
    setActiveJob(JSON.parse(localStorage.getItem('activeJob')) || []);
  }, []);

  const updateLocalStorageAndState = (newActiveJobs, newCloseJobs, successMessage, redirectPath) => {
    localStorage.setItem('activeJob', JSON.stringify(newActiveJobs));
    localStorage.setItem('closeJob', JSON.stringify(newCloseJobs));
    setActiveJob(newActiveJobs);
    toast.success(successMessage);
    setTimeout(() => {
      navigate(redirectPath);
    }, 500);
  };

  const deleteJob = () => {
    if (jobStatus === "active") {
      const updatedJobs = activeJob.filter((_, i) => parseInt(jobId) !== i);
      const deletedJob = activeJob.find((_, i) => parseInt(jobId) === i);
      closeJob.push(deletedJob);
      updateLocalStorageAndState(updatedJobs, closeJob, "Job has been closed.", '/active-jobs');
    } else {
      const updatedCloseJobs = closeJob.filter((_, i) => parseInt(jobId) !== i);
      const reopenedJob = closeJob.find((_, i) => parseInt(jobId) === i);
      const updatedActiveJobs = [...activeJob, reopenedJob];
      updateLocalStorageAndState(updatedActiveJobs, updatedCloseJobs, "Job has been reopened.", '/close-jobs');
    }
  };

  const renderJobDetails = () => (
    <>
      <div className={`mb-3 border-bottom py-3 position-sticky ${dark === 'light' ? 'bg-white' : 'bg-dark'}`} style={{ top: "110px" }}>
        <Link to={jobStatus === "active" ? `/active-jobs` : "/close-jobs"} className='btn btn-outline-info mb-4'>
          Back to {jobStatus === "active" ? "active" : "close"} jobs
        </Link>
        <h1 className='text-capitalize'>{currentJob?.title ?? ""}</h1>
        <div>
          <strong>Hostwinds</strong> <span>• 4.3★</span>
          <p>12101 Tukwila International Boulevard, Tukwila, WA 98168</p>
          <p><strong>$75,000 - $140,000 a year</strong> • Full-time</p>
          <button style={{ backgroundColor: '#0073b1', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}>Apply now</button>
        </div>
      </div>

      <Section title="Job details">
        <p><strong>Pay:</strong> $75,000 - $140,000 a year</p>
        <p><strong>Job type:</strong> {currentJob?.jobTypes.join(", ") ?? ""}</p>
        <p><strong>Shift:</strong> Day shift</p>
        <p><strong>Schedule:</strong> {currentJob?.Schedule.join(", ") ?? ""}</p>
        <p><strong>Work setting:</strong> {currentJob?.jobLocation ?? ""}</p>
      </Section>

      <Section title="Location">
        <p><strong>Estimated commute:</strong></p>
        <p>12101 Tukwila International Boulevard, Tukwila, WA 98168</p>
      </Section>

      <Section title="Benefits">
        <ul>
          {currentJob?.benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </Section>

      <Section title="Full job description">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Section>
    </>
  );

  const Section = ({ title, children }) => (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );

  return (
    <div>
      <Breadcrumbs />
      {!activeJob ? (
        <div>Loading...</div>
      ) : (
        <div className='JobDetails d-flex mb-5 justify-content-around align-items-start'>
          <CModal visible={visible} onClose={() => setVisible(false)} aria-labelledby="LiveDemoExampleLabel">
            <CModalHeader>
              <CModalTitle id="LiveDemoExampleLabel">{jobStatus === "active" ? "Close" : "Re-open"} Job</CModalTitle>
            </CModalHeader>
            <CModalBody>
              <p>Are you sure you want to {jobStatus === "active" ? "Close" : "Re-open"} this Job?</p>
            </CModalBody>
            <CModalFooter>
              <CButton color="danger" className='text-white' onClick={deleteJob}>
                {jobStatus === "active" ? "Close" : "Re-open"} Job
              </CButton>
              <CButton className='border' onClick={() => setVisible(false)}>Cancel</CButton>
            </CModalFooter>
          </CModal>

          <div className="left-side p-3 rounded-4 col-7 shadow border">
            {renderJobDetails()}
          </div>

          <div className="right-side p-3 rounded-4 col-4 shadow border position-sticky" style={{ top: "130px" }}>
            {jobStatus === "active" && (
              <Link to={`edit?id=${jobId}`}>
                <CButton color="info" className='w-100 text-white mb-3'>Edit Job</CButton>
              </Link>
            )}
            <div className="list mb-5 border-bottom">
              <CButton color="light" variant="ghost" className='d-flex justify-content-between w-100 text-primary mb-3' onClick={() => setVisible(true)}>
                <span>{jobStatus === "active" ? "Close" : "Re-open"} Job</span>
                <span><CIcon icon={cilArrowRight} /></span>
              </CButton>
              {jobStatus === "active" && (
                <Link to="/application" className='d-flex justify-content-between w-100 text-primary mb-3 btn rounded-0 pb-2 find_candidate'>
                  <span>Find Candidates for this Job</span>
                  <span><CIcon icon={cilArrowRight} /></span>
                </Link>
              )}
            </div>

            <div className="status-overall my-3">
              <p><strong>Views:</strong>251</p>
              <p><strong>Candidates:</strong>251</p>
              <p><strong>Status:</strong>Open</p>
              <p><strong>Created:</strong>18-Nov</p>
            </div>
          </div>

          <ToastContainer autoClose={500} />
        </div>
      )}
    </div>
  );
}

export default JobDetails;
