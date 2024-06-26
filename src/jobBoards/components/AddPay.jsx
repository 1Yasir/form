import React from 'react';
import SelectField from './SelectField';
import InputField from './InputField';

function AddPay(props) {
    const { watch, errors, register } = props;
    const showPayBy = watch("ShowPayBy");

    return (

        <div className=''>
            <SelectField
                register={register}
                name="ShowPayBy"
                label="Show pay by"
                options={[
                    { value: "Range", label: "Range" },
                    { value: "Starting amount", label: "Starting amount" },
                    { value: "Maximum amount", label: "Maximum amount" },
                    { value: "Exact amount", label: "Exact amount" },
                ]}
                errors={errors}
                watch={watch}
            />

            {/* Conditional rendering based on "ShowPayBy" value */}
            {showPayBy === "Range" && (
                <div>
                    <div className=''>
                        <InputField
                            type="number"
                            register={register}
                            name="Maximum"
                            label="Maximum"
                            errors={errors}
                            watch={watch}
                        />
                        <span>to</span>
                        <InputField
                            type="number"
                            register={register}
                            name="Minimum"
                            label="Minimum"
                            errors={errors}
                            watch={watch}
                        />
                    </div>
                </div>
            )}

            {showPayBy && showPayBy !== "Range" && (
                <InputField
                    type="number"
                    register={register}
                    name="Exact"
                    label="Exact"
                    errors={errors}
                    watch={watch}
                />
            )}

            <SelectField
                register={register}
                name="Rate"
                label="Rate"
                options={[
                    { value: "per hour", label: "per hour" },
                    { value: "per day", label: "per day" },
                    { value: "per week", label: "per week" },
                ]}
                errors={errors}
                watch={watch}
            />
        </div>
    )
}

export default AddPay;