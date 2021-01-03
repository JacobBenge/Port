// christmasCard.js
// visit www.bengeco.com/dad/
const emotion = prompt('Enter your emotion').toString().toLowerCase();
const tea = ['Honey Lavender', 'Sweet Tangerine', 'Honey Chai', 'Fruit Sampler'];

if(emotion === 'stress'){
    alert(`I recommend ${tea[0]} tea for Stress Relief.`);
} else if (emotion === 'negative') {
    alert(`I recommend ${tea[1]} tea for Positive Energy.`);
} else if (emotion === 'tired') {
    alert(`I recommend ${tea[2]} tea for Vitality.`);
} else {
    alert(`I don't have a recommendation for '${emotion}', but ${tea[3]} tea is a safe bet!`);
}