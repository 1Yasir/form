import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
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
    scheduleOptions
}
    from "../utils/helper"
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CButton,
} from "@coreui/react";



function Form() {
    const [visible, setVisible] = useState(false);
    const [previewList, setPreviewList] = useState([]);

    const { register, handleSubmit, formState: { errors }, watch, control, reset, getValues } = useForm({
        mode: "all"
    });

    const submit = (data) => {
        console.log(data);
        reset();
    }

    const jobPreview = () => {
        setVisible(true);
        setPreviewList(Object.keys(getValues()));
    }

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
            <CRow>
                <CCol sm={6} className='offset-3'>
                    <CForm onSubmit={handleSubmit(submit)}>
                        <CRow>
                            <CCol>
                                <h1 className='my-3 shadow-sm rounded py-2 px-3'>Create job</h1>
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
                            {renderCheckboxGroup("jobTypes", "Job Types", jobTypesOptions)}
                            {renderCheckboxGroup("experienceLevel", "Experience Level", experienceLevelOptions)}
                            {renderCheckboxGroup("Schedule", "Schedule", scheduleOptions)}
                            <AddPay
                                watch={watch}
                                errors={errors}
                                register={register}
                                control = {control}
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
                            <Preferences />
                            <CCol className='mb-3'>
                                <CButton color="secondary" onClick={jobPreview}>Preview</CButton>
                                <CButton color="primary" type='submit' className='ms-3'>Submit Form</CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCol>
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
