// Use an object literal to store properties that relate to eachother
// a property is a key and value pair
// use curly braces to declare the object literal and use brackets (similar to an array) to retrieve the data. 
const fitBitData = {
    totalSteps      : 10001,
    totalMiles      : 10,
    avgCalorieBurn  : 40,
    workoutsThisweek: '5 of 7',
    avgGoodSleep    : '2:13'
};

fitBitData.totalSteps // returns 10001
fitBitData['totalSteps'] // returns 10001
fitBitData[totalSteps]  // will return the variable totalSteps or in this case undefined, not the property in the fitBitData object literal.

// updating or correcting an existing property in the object literal.
fitBitData.avgCalorieBurn = 41;
// how to add a property to the existing object literal.
fitBitData.newProperty = 5;

// Nested objects and arrays

const comments =[
    {
        username: 'Tammy', 
        text: 'lolololol', 
        votes: 9
    },
    {
        username: 'George', 
        text: 'Love it', 
        votes: 100
    }
]