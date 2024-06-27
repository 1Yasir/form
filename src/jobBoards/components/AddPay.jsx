import React, { memo } from 'react';
import SelectField from './SelectField';
import InputField from './InputField';
import CheckboxGroup from "../components/CheckboxGroup"
import { payOptions, rateOptions, CompensationOptions , benefitsOptions } from "../utils/helper"
import CIcon from '@coreui/icons-react';
import { cilGrain } from "@coreui/icons"


const AddPay = ({ watch, errors, register, control }) => {
    const showPayBy = watch("ShowPayBy");

    const renderInputField = (name, label) => (

        <InputField
            type="number"
            register={register}
            name={name}
            label={label}
            errors={errors}
            watch={watch}
        />
    );

    const renderSelectField = (name, label, options) => {
        return (

            <SelectField
                register={register}
                name={name}
                label={label}
                options={options}
                errors={errors}
                watch={watch}
            />
        )
    }

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

        <div className='addPay_benefits'>
            <h2 className='my-3 shadow-sm rounded py-2 px-3'>Add pay and benefits</h2>
            <div className='addPay'>
                {renderSelectField("ShowPayBy", "Show pay by", payOptions)}
                {/* Conditional rendering based on "ShowPayBy" value */}
                {showPayBy === "Range" && (
                    <div className=''>
                        {renderInputField("maximum", "Maximum")}
                        <span>to</span>
                        {renderInputField("minimum", "Minimum")}
                    </div>
                )}

                {showPayBy && showPayBy !== "Range" && renderInputField("exact", "Amount")}
                {renderSelectField("rate", "Rate", rateOptions)}

            </div>
            {renderCheckboxGroup("CompensationPackage", "Compensation package", CompensationOptions)}
            <div className="benefits">
                <h2 className='my-3 shadow-sm rounded py-2 px-3'>Benefits</h2>
                <div className=" d-flex gap-1">
                    <CIcon icon={cilGrain} className='mx-2 ' style={{ cursor: "pointer", color: "goldenrod" }} />
                    <div>
                        <p> <b>Tip:</b>  Use Competitive benefits </p>
                        <p>We've selected competitive benefits for Web Developer jobs in Seattle, WA. The higher the percentage, the more jobs have these benefits. Simply remove those you don't offer.</p>
                        {renderCheckboxGroup("benefits", "Are any of the following benefits also offered?", benefitsOptions)}



                    </div>

                </div>




            </div>
        </div>
    );
};

export default AddPay;
