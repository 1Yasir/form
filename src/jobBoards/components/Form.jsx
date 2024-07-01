// Form.js
import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import JoditEditor from 'jodit-react';
import CheckboxGroup from './CheckboxGroup';
import SelectField from './SelectField';
import InputField from './InputField';
import AddPay from './AddPay';
import Model from './Model';
import Preferences from './Preferences';
import "../jobBoards.css";
import {
  industryOptions,
  hiringPeopleOptions,
  jobLocationOptions,
  jobTypesOptions,
  experienceLevelOptions,
  scheduleOptions,
  expectedHoursOptions
} from "../utils/helper";
import {
  CContainer,
  CRow,
  CCol,
  CForm,
  CButton,
} from "@coreui/react";
import AsideBar from './AsideBar';

function Form(props) {
  const { pageTitle, initialValues, isEdit, index } = props;
  const [visible, setVisible] = useState(false);
  const [previewList, setPreviewList] = useState([]);
  const [activeJob, setActiveJob] = useState([]); //store all jobs 
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");

  const { register, handleSubmit, formState: { errors }, watch, control, reset, getValues } = useForm({
    mode: "all",
    defaultValues: initialValues
  });

  useEffect(() => {
    const storedData = localStorage.getItem('activeJob');
    if (storedData) {
      setActiveJob(JSON.parse(storedData));
    }
    setPreviewList(Object.keys(getValues()));

  }, []);

  // useEffect(() => {
  //   const sections = previewList.map((link) => document.getElementById(link));
  //   const observerOptions = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1 // Adjust this value according to your needs
  //   };
    
  //   const observerCallback = (entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         setActiveLink(entry.target.id);
  //       }
  //     });
  //   };
    
  //   const observer = new IntersectionObserver(observerCallback, observerOptions);
    
  //   sections.forEach(section => {
  //     if (section) observer.observe(section);
  //   });
    
  //   return () => {
  //     sections.forEach(section => {
  //       if (section) observer.unobserve(section);
  //     });
  //   };
  // }, [previewList]);

  const submit = (data) => {
    if (isEdit) {
      const jobs = JSON.parse(localStorage.getItem("activeJob"));
      const updatedJobs = jobs.map((job, i) => (i === parseInt(index) ? { ...data } : job));
      localStorage.setItem('activeJob', JSON.stringify(updatedJobs));
      setActiveJob(updatedJobs);
      toast.success("Form has been updated successfully");
    } else {
      data.submitDate = new Date();
      const storeJob = [...activeJob, data];
      localStorage.setItem('activeJob', JSON.stringify(storeJob));
      setActiveJob(storeJob);
      toast.success("Form has been submit successfully");
    }
    setTimeout(() => navigate('/active-jobs'), 2000);

  };

  const jobPreview = () => {
    setVisible(true);
    setPreviewList(Object.keys(getValues()));
  };

  const renderSelectField = (name, label, options) => (
    <SelectField
      register={register}
      name={name}
      label={label}
      options={options}
      errors={errors}
      watch={watch}
    />
  );

  const renderCheckboxGroup = (name, label, options) => (
    <CheckboxGroup
      control={control}
      name={name}
      label={label}
      options={options}
      errors={errors}
      watch={watch}
    />
  );

  return (
    <CContainer className='py-5'>
      <CRow className='align-items-start'>
        <CCol sm={6} className='offset-3'>
          <CForm onSubmit={handleSubmit(submit)}>
            <CRow>
              <CCol>
                <h1 className='my-3 shadow-sm rounded py-2 px-3'>{pageTitle}</h1>
              </CCol>
              {renderSelectField("companyIndustary", "Company Industry", industryOptions)}
              <InputField
                type="text"
                register={register}
                name="title"
                label="Job Title"
                errors={errors}
                watch={watch}
              />
              {renderSelectField("hiringPeople", "Number of people to hire for this job", hiringPeopleOptions)}
              {renderSelectField("jobLocation", "Job location type", jobLocationOptions)}
              <div className="jobTypes">
                {renderCheckboxGroup("jobTypes", "Job Types", jobTypesOptions)}

                {watch("jobTypes")?.includes("Part Time") && (
                  <>
                    {renderSelectField("expectedHours", "Expected hours", expectedHoursOptions)}
                    {watch("expectedHours") === "Fixed hours" && (
                      <InputField
                        type="number"
                        register={register}
                        name="fixedHours"
                        label="Hours per week"
                        errors={errors}
                        watch={watch}
                      />
                    )}
                  </>
                )}
              </div>

              {renderCheckboxGroup("experienceLevel", "Experience Level", experienceLevelOptions)}
              {renderCheckboxGroup("Schedule", "Schedule", scheduleOptions)}
              <AddPay
                watch={watch}
                errors={errors}
                register={register}
                control={control}
              />
              <CCol sm={12} className='mb-3'>
                <h2 className='my-3 shadow-sm rounded py-2 px-3'>Describe the job</h2>
                <Controller
                  name="editorContent"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'This field is required*' }}
                  render={({ field }) => (
                    <JoditEditor
                      {...field}
                      value={field.value}
                      onBlur={field.onBlur}
                      onChange={field.onChange}
                    />
                  )}
                />
                {errors.editorContent && <div className="text-danger">{errors.editorContent.message}</div>}
              </CCol>
              <Preferences
                register={register}
                watch={watch}
                errors={errors}
              />
              <CCol className='mb-3'>
                <CButton color="secondary" onClick={jobPreview}>Preview</CButton>
                <CButton color="primary" type='submit' className='ms-3'>Submit Form</CButton>
              </CCol>
            </CRow>
          </CForm>
        </CCol>

        <AsideBar
          links={previewList}
          activeLink={activeLink}
        />
        <ToastContainer autoClose={2000} />
        <Model
          visible={visible}
          previewList={previewList}
          getValues={getValues}
          setVisible={setVisible}
        />
      </CRow>
    </CContainer>
  );
}

export default Form;
