
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

export {formatString}