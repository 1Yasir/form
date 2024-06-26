import React, { memo } from 'react';
import SelectField from './SelectField';
import InputField from './InputField';

const AddPay = ({ watch, errors, register }) => {
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

    const payOptions = [
        { value: "Range", label: "Range" },
        { value: "Starting amount", label: "Starting amount" },
        { value: "Maximum amount", label: "Maximum amount" },
        { value: "Exact amount", label: "Exact amount" },
    ];

    const rateOptions = [
        { value: "per hour", label: "per hour" },
        { value: "per day", label: "per day" },
        { value: "per week", label: "per week" },
    ];

    return (
        <div className=''>
            <SelectField
                register={register}
                name="ShowPayBy"
                label="Show pay by"
                options={payOptions}
                errors={errors}
                watch={watch}
            />

            {/* Conditional rendering based on "ShowPayBy" value */}
            {showPayBy === "Range" && (
                <div className=''>
                    {renderInputField("maximum", "Maximum")}
                    <span>to</span>
                    {renderInputField("minimum", "Minimum")}
                </div>
            )}

            {showPayBy && showPayBy !== "Range" && renderInputField("exact", "Amount")}

            <SelectField
                register={register}
                name="rate"
                label="Rate"
                options={rateOptions}
                errors={errors}
                watch={watch}
            />
        </div>
    );
};

export default memo(AddPay);
