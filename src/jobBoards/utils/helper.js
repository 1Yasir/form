
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

export {formatString}