function firstNonRepeatedChar(str) { // Use an object to store character frequencies
    const frequencyMap = {};

    // Iterate through the string to count character frequencies
    for (const char of str) {
        // Update frequencyMap for the current character
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeated character
    for (const char of str) {
        if (frequencyMap[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
