import React from 'react';
import {resumeOptions , backgroundOptions , hireOptions} from "../utils/helper"
import SelectField from './SelectField';
import {
  CFormInput,
  CFormLabel,
  CFormCheck
} from "@coreui/react";

function Preferences({ register, watch, errors }) {


  const renderSelectField = (name , label , options) => (
    <SelectField
      register={register}
      name={name}
      label={label}
      options={options}
      errors={errors}
      watch={watch}
    />
  )

  return (
    <div className='preferences mb-3'>
      <h2 className='my-3 shadow-sm rounded py-2 px-3'>Set Preferences</h2>
      <div className='Communication_preferences mb-3'>
        <h3>Communication preferences </h3>
        <CFormLabel htmlFor="email" className=' fw-bold'>

          Send daily updates to<span className={`h4 ${watch("email")?.length > 0 ? "text-success" : "text-danger"}`}>*</span>

        </CFormLabel>
        <CFormInput
          type="email"
          placeholder="example@gamil.com"
          id="email"
          {...register("email", {
            required: "This field is required*",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
              feedbackValid: "Looks good..."
            }
          })}
          valid={watch("email")?.length > 0}
          invalid={errors.email ? true : false}
          feedbackInvalid="This field is required*"
          className='mb-3'
        />
        <CFormCheck
          id="flexCheckDefault"
          label="Plus, send an individual email update each time someone applies."
          {...register("emailCheck")}
        />

      </div>
      <div className='Application_preferences'>
        {renderSelectField("resume" , "Hire Setting" , resumeOptions)}
        {renderSelectField("backgroundCheck" , "Do you require a background check for this job ?..." , backgroundOptions)}

      </div>
      <div className='hire_setting'>
        {renderSelectField("hireSetting" , "Hire Setting" , hireOptions)}

      </div>

    </div>
  )
}

export default Preferences