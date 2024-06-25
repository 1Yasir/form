import React from 'react';
import { CFormSelect, CFormLabel, CFormFeedback, CCol } from '@coreui/react';

const SelectField = (props) => {
    const { register, name, label, options, errors, watch } = props
    return (
        <CCol sm={12} className='mb-2'>
            <CFormLabel className='fw-bold' htmlFor={name}>
                {label}<span className={`h4 ${watch(name)?.length > 0 ? "text-success" : "text-danger"}`}>*</span>
            </CFormLabel>
            <CFormSelect
                {...register(name, { required: true })}
                invalid={errors[name] ? true : false}
                valid={watch(name)?.length > 0}
                id={name}
                feedbackInvalid="required*"
                feedbackValid="Look goods..."
            >
                <option value="">Select an option</option>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </CFormSelect>

        </CCol>
    );
};

export default SelectField;
