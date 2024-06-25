import React from 'react';
import { useForm, Controller } from "react-hook-form";
import JoditEditor from 'jodit-react';
import CheckboxGroup from './CheckboxGroup';
import SelectField from './SelectField';
import InputField from './InputField';
import "../jobBoards.css"
import {
    CContainer,
    CRow,
    CCol,
    CForm,
    CFormInput,
    CFormCheck,
    CFormLabel
} from "@coreui/react";

function Form() {
    const { register, handleSubmit, formState: { errors }, watch, control, reset } = useForm({
        mode: "all"
    });

    const submit = (data) => {
        console.log(data);

        reset();
    }

    return (
        <CContainer className='py-5'>
            <CRow>
                <CCol sm={6} className='offset-3'>
                    <CForm onSubmit={handleSubmit(submit)}>
                        <CRow>

                            {/* this select field is set for companyIndustary  */}

                            <SelectField
                                register={register}
                                name="companyIndustary"
                                label="Company Industry"
                                options={[
                                    { value: "Software/Technology", label: "Software/Technology" },
                                    { value: "Mobile App Development", label: "Mobile App Development" },
                                    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
                                    { value: "Web Development", label: "Web Development" },
                                    { value: "Cloud Computing", label: "Cloud Computing" },
                                    { value: "E-commerce", label: "E-commerce" },
                                ]}
                                errors={errors}
                                watch={watch}
                            />

                            {/* this input field is set for Title  */}

                            <InputField
                                type="text"
                                register={register}
                                name="title"
                                label="Title"
                                errors={errors}
                                watch={watch}
                            />

                            {/* this select field is set for Number of people to hire for this job*/}

                            <SelectField
                                register={register}
                                name="hiringPeople"
                                label="Number of people to hire for this job"
                                options={[
                                    { value: "1", label: "1" },
                                    { value: "2", label: "2" },
                                    { value: "3", label: "3" },
                                    { value: "5", label: "5" },
                                    { value: "7", label: "7" },
                                    { value: "10", label: "10" },

                                ]}
                                errors={errors}
                                watch={watch}
                            />

                            {/* this select field is set for Job location type**/}

                            <SelectField
                                register={register}
                                name="jobLocation"
                                label="Job location type"
                                options={[
                                    { value: "In person", label: "In person" },
                                    { value: "Fully remote: no on-site work required", label: "Fully remote: no on-site work required" },
                                    { value: "On the road", label: "On the road" },


                                ]}
                                errors={errors}
                                watch={watch}
                            />
                            {/* this checkbox group  is set for Job type**/}


                            <CheckboxGroup
                                control={control}
                                name="jobTypes"
                                label="Job Types"
                                options={[
                                    { value: "Full Time", label: "Full Time" },
                                    { value: "Part Time", label: "Part Time" }
                                ]}
                                errors={errors}
                                watch={watch}
                            />


                            {/* this Controller  is set for description (joditEditor)  */}


                            <CCol sm={12} className='mb-3'>
                                <CFormLabel>Editor</CFormLabel>
                                <Controller
                                    name="editorContent"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'This field is required*' }}
                                    render={({ field }) => (
                                        <JoditEditor
                                            value={field.value}
                                            onBlur={field.onBlur} // Send value to hook form onBlur
                                            onChange={field.onChange} // Send value to hook form onChange
                                        />
                                    )}
                                />
                                {errors.editorContent && <div style={{ color: 'red', fontSize: "0.875em", marginTop: "5px" }} >{errors.editorContent.message}</div>}
                            </CCol>

                            <CCol sm={4} className='mb-3'>
                                <CFormInput
                                    type='submit'
                                    value="Submit"
                                />
                            </CCol>
                        </CRow>
                    </CForm>
                </CCol>
            </CRow>
        </CContainer>
    );
}

export default Form;
