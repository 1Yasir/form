import React from 'react';
import { Controller } from 'react-hook-form';
import { CFormCheck, CFormLabel, CFormFeedback, CCol } from '@coreui/react';

const CheckboxGroup = React.memo(({ control, name, label, options, watch, errors }) => (
    <CCol sm={12} className='CheckboxGroup mb-3' id={name}>
        <h2 className='my-3 shadow-sm rounded py-2 px-3'>{label}</h2>
        <CFormLabel className='fw-bold d-block'>
            {label}<span className={watch(name)?.length > 0 ? "text-success" : "text-danger"}>*</span>
        </CFormLabel>
        <Controller
            name={name}
            control={control}
            rules={{ required: 'This field is required' }}
            render={({ field }) => (
                <>
                    {options.map(option => (
                        <CFormCheck
                            {...field}
                            key={option.value}
                            id={option.value}
                            label={option.label}
                            value={option.value}
                            button={{ color: "primary" }}
                            onChange={(e) => {
                                const newValue = [...(field.value || [])];
                                if (e.target.checked) {
                                    newValue.push(e.target.value);
                                } else {
                                    newValue.splice(newValue.indexOf(e.target.value), 1);
                                }
                                field.onChange(newValue);
                            }}
                            checked={field.value?.includes(option.value) || false}
                        />
                    ))}
                </>
            )}
        />
        {errors[name] && <CFormFeedback className="text-danger">At least one {label.toLowerCase()} is required*</CFormFeedback>}
    </CCol>
));
console.log(123);
export default CheckboxGroup;
