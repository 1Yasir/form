
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

// use this arrays for the option 

export const industryOptions = [
    { value: "Software/Technology", label: "Software/Technology" },
    { value: "Mobile App Development", label: "Mobile App Development" },
    { value: "Artificial Intelligence", label: "Artificial Intelligence" },
    { value: "Web Development", label: "Web Development" },
    { value: "Cloud Computing", label: "Cloud Computing" },
    { value: "E-commerce", label: "E-commerce" },
];

export const hiringPeopleOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "7", label: "7" },
    { value: "10", label: "10" },
];

export const jobLocationOptions = [
    { value: "In person", label: "In person" },
    { value: "Fully remote: no on-site work required", label: "Fully remote: no on-site work required" },
    { value: "On the road", label: "On the road" },
];

export const jobTypesOptions = [
    { value: "Full Time", label: "Full Time" },
    { value: "Part Time", label: "Part Time" },
    { value: "Temporary", label: "Temporary" },
    { value: "Contract", label: "Contract" },
    { value: "InternShip", label: "InternShip" },
];

export const experienceLevelOptions = [
    { value: "No Experience needed", label: "No Experience needed" },
    { value: "Under 1 year", label: "Under 1 year" },
    { value: "Under 2 year", label: "Under 2 year" },
    { value: "Under 3 year", label: "Under 3 year" },
    { value: "Under 4 year", label: "Under 4 year" },
    { value: "Under 5 year", label: "Under 5 year" },
    { value: "other", label: "other" },
];

export const scheduleOptions = [
    { value: "4 hour shift", label: "4 hour shift" },
    { value: "8 hour shift", label: "8 hour shift" },
    { value: "10 hour shift", label: "10 hour shift" },
    { value: "12 hour shift", label: "12 hour shift" },
    { value: "Day shift", label: "Day shift" },
    { value: "Night shift", label: "Night shift" },
    { value: "Evening shift", label: "Evening shift" },
];
export const payOptions = [
    { value: "Range", label: "Range" },
    { value: "Starting amount", label: "Starting amount" },
    { value: "Maximum amount", label: "Maximum amount" },
    { value: "Exact amount", label: "Exact amount" },
];

export const rateOptions = [
    { value: "per hour", label: "per hour" },
    { value: "per day", label: "per day" },
    { value: "per week", label: "per week" },
];

export const CompensationOptions = [
    { value: "Yearly pay", label: "Yearly pay" },
    { value: "Bonus opportunities", label: "Bonus opportunities" },
    { value: "Monthly bonus", label: "Monthly bonus" },
    { value: "Weekly Pay", label: "Weekly Pay" },
    { value: "Yearly bonus", label: "Yearly bonus" },
    { value: "Hourly pay", label: "Hourly pay" },
    { value: "Overtime pay", label: "Overtime pay" },
    { value: "Profit sharing", label: "Profit sharing" },
    { value: "other", label: "other" },
]
export const benefitsOptions = [
    { value: "Health insurance (12%)", label: "Health insurance (12%)" },
    { value: "paid time off (9%)", label: "paid time off (9%)" },
    { value: "Vision insurance", label: "Vision insurance" },
    { value: "Flexible schedule", label: "Flexible scheudle" },
    { value: "Life insurance", label: "Life insurance" },
    { value: "Retirement plan", label: "Retirement plan" },
    { value: "Health saving account", label: "Health saving account" },
    { value: "Professional development assistance", label: "Professional development assistance" },
    { value: "Employee assistance program", label: "Employee assistance program" },
]

export const resumeOptions =  [
    { value: "Yes , require a resume.", label: "Yes , require a resume." },
    { value: "No, don't ask for a resume", label: "No, don't ask for a resume" },
    { value: "Give the option to include a resume", label: "Give the option to include a resume" },
]
export const backgroundOptions =  [
    { value: "Yes,this job requires a background check.", label: "Yes,this job requires a background check." },
    { value: "No,this job does not  requires a background check", label: "No,this job does not  requires a background check" },
]
export const hireOptions =  [
    { value: "1 to 3 days", label: "1 to 3 days" },
    { value: "3 to 5 days", label: "3 to 5 days" },
    { value: "5 to 10 days", label: "5 to 10 days" },
   
]
export { formatString }