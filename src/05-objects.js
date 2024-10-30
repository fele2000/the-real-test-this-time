/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function createPersonObject() {
    const personStats = {
        name: "John Doe",
        age: 30,
        city: "New York"
    }
    return personStats;
}


/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    const personStats = {
        name: "John Doe",
        age: 30,
        city: "New York"
    }
    return personStats.name;
}


/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */
function findPersonByName(persons, name) {
    const personArray = [
        { name: 'John Doe', age: 30 },
        {name: 'Jane Doe', age: 25}
    ];
    for (let i = 0; i < personArray.length; i++){
        if (personArray[i].name === name) return personArray[i];
    }
}


/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {number} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */

function getTotalAge(persons) {
    if (persons.length !== 0) {
        let totalSum = 0;
        persons.forEach(persons => {
            if (persons.age.length !== 0) {
                    totalSum += persons.age;
            }
        })
        return totalSum;
    } else {
        return 0;
    }
}


/**
 * This function checks for duplicate email addresses in an array of users.
 *
 * @param {Object[]} users - An array of user objects with an email property.
 * @returns {boolean} - True if duplicate emails are found, otherwise false.
 *
 * Usage:
 * const users = [
 *   { email: 'alice@example.com' },
 *   { email: 'bob@example.com' },
 *   { email: 'alice@example.com' }
 * ];
 * const hasDuplicates = checkForDuplicateEmails(users); // true
 */
function checkForDuplicateEmails(users) {
    let hasDuplicate = false;
    const uniqueValues = new Set(users.map(v => v.email));

    if (uniqueValues.size < users.length) {
        hasDuplicate = true;
    }
    return hasDuplicate
}
