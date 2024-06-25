import React, { useState } from 'react';
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
    CFormLabel,
    CButton,
    CModal,
    CModalBody,
    CModalTitle,
    CModalHeader,
    CModalFooter
} from "@coreui/react";

function Form() {

    const [visible, setVisible] = useState(false);
    const [previewList, setPreviewList] = useState([]);

    const { register, handleSubmit, formState: { errors }, watch, control, reset, getValues } = useForm({
        mode: "all"
    });

    const submit = (data) => {
        console.log(data);
        // reset();
    }

    const jobPreview = () => {
        setVisible(true);
        setPreviewList(Object.keys(getValues()));
    }


    function formatString(str) {
        // Split the string by spaces to process each word separately
        const words = str.split(' ');

        // Map over each word to capitalize the first letter and handle camel case
        const formattedWords = words.map(word => {
            // Capitalize the first letter of the word
            let capitalized = word.charAt(0).toUpperCase() + word.slice(1);

            // Insert spaces before uppercase letters
            capitalized = capitalized.replace(/([A-Z])/g, ' $1').trim();

            return capitalized;
        });

        // Join the formatted words back into a single string
        return formattedWords.join(' ');
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

                            {/* this checkbox group is set for Job type**/}

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

                            {/* this Controller is set for description (JoditEditor)  */}

                            <CCol sm={12} className='mb-3'>
                                <CFormLabel>Editor</CFormLabel>
                                <Controller
                                    name="editorContent"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'This field is required*' }}
                                    render={({ field }) => (
                                        <JoditEditor
                                             {...field}
                                            value={field.value}
                                            onBlur={field.onBlur} // Send value to hook form onBlur
                                            onChange={field.onChange} // Send value to hook form onChange
                                        />
                                    )}
                                />
                                {errors.editorContent && <div style={{ color: 'red', fontSize: "0.875em", marginTop: "5px" }}>{errors.editorContent.message}</div>}
                            </CCol>

                            <CCol className='mb-3'>
                                <CButton color="secondary" onClick={jobPreview}>Preview</CButton>
                                <CButton color="primary" type='submit' className='ms-3'>Submit Form</CButton>
                            </CCol>
                        </CRow>
                    </CForm>
                </CCol>
                <CModal
                    visible={visible}
                    onClose={() => setVisible(false)}
                    aria-labelledby="LiveDemoExampleLabel"
                >
                    <CModalHeader>
                        <CModalTitle id="LiveDemoExampleLabel">Preview Job Post</CModalTitle>
                    </CModalHeader>
                    <CModalBody>
                        {previewList && previewList.map((list, i) => (
                            <div key={i} className='d-flex justify-content-between position-relative' style={{ overflowX: "hidden" }}>
                                <p>
                                    {list === "editorContent" ? (
                                        <>
                                            <strong>{formatString(list)}:</strong>
                                            <span dangerouslySetInnerHTML={{ __html: getValues(list) }} />
                                        </>
                                    ) : (
                                        <>
                                            <strong>{formatString(list)}:</strong>  {Array.isArray(getValues(list)) ? getValues(list)?.join(" - ") : getValues(list)}
                                        </>
                                    )}
                                </p>
                                <a href={`#${list}`} onClick={() => setVisible(false)} className='position-absolute' style={{ right: 0 }}>----</a>
                            </div>
                        ))}

                    </CModalBody>
                    <CModalFooter>
                        <CButton color="secondary" onClick={() => setVisible(false)}>
                            Close
                        </CButton>
                    </CModalFooter>
                </CModal>
            </CRow>
        </CContainer>
    );
}

export default Form;


