/**
 * This function generates a birthday message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Message for the user in this format: Hey NAME, happy YEAR birthday!
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // "Hey Jack, happy 25 birthday!"
 */
function generateMessage(name, age) {
    return `Hey ${name}, happy ${age} birthday!`
}

/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
function titleCase(sentence) {
    const finalSentence = sentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    return finalSentence;
}

/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
    const len = end - start + 1;
    const arr = new Array(len);
    let sum = 0;

    for (let i=0; i<len; i++) {
        arr[i] = start + i;
    }

    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum;

}


/**
 * This function generates an acronym from the first letter of each word in a sentence, ignoring words with numbers.
 *
 * @param {string} sentence - The sentence to create an acronym from.
 * @returns {string} - The generated acronym.
 *
 * Usage:
 * const acronym = generateAcronym("Open 24 Hours a Day"); // acronym will be "OHAD"
 * const anotherAcronym = generateAcronym("Federal Bureau Investigation"); // anotherAcronym will be "FBI"
 */
function generateAcronym(sentence) {
    const removeUnwanted = sentence.replace(/[^a-zA-Z-\s]+/, '')
    const upperSentence = removeUnwanted.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
    const apprevSentence = upperSentence.match(/\b([A-Z])/g).join('');

    return apprevSentence;
}


/**
 * This function counts consonants in a string, with lowercase counting as 1 and uppercase as 2.
 *
 * @param {string} str - The input string.
 * @returns {number} - The calculated "weighted" consonant count.
 *
 * Usage:
 * const consonantCount = countConsonantsWeighted("Hello World!"); // consonantCount will be 9
 * const anotherCount = countConsonantsWeighted("JavaScript"); // anotherCount will be 9
 */
function countConsonantsWeighted(str) {
    const trimSentence = str.replace(/[^a-zA-Z-]+/, '')
    let countConsonants = 0;
    let i = 0;
    let character = '';
    while (i <= trimSentence.length) {
        character = trimSentence.charAt(i);
        if (trimSentence[i] !== "a" && trimSentence[i] !== "e" && trimSentence[i] !== "i" &&
        trimSentence[i] !== "o" && trimSentence[i] !== "u" && trimSentence[i] &&
            trimSentence[i] !== "A" && trimSentence[i] !== "E" && trimSentence[i] !== "I" &&
            trimSentence[i] !== "O" && trimSentence[i] !== "U" && trimSentence[i] !== " "){
            if (character == character.toUpperCase() && character >= 'A' && character <= 'Z') {
                countConsonants += 2;

            } else if (character == character.toLowerCase() && character >= 'a' && character <= 'z') {
                countConsonants++;
            }
        }
        i++;
    }
    return (countConsonants);
}
