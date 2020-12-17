// coin flip
console.log("Coin Flip")

let random =  Math.random()

if (random < 0.5){
    console.log("Heads")
}else {
    console.log("Tails")
}
console.log(random)

// day of week prompt
const dayOfWeek = prompt('Enter a day of the week').toUpperCase();

if(dayOfWeek === 'MONDAY'){
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'SATURDAY') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'FRIDAY') {
    console.log("Friday is decent especially after work!")
} else {
    console.log("MEH")
}


// admission price checker
const age = parseInt(prompt('Enter your age as a whole number'));

if (age <5) {
    console.log("Baby is free admission")
} else if (age <10) {
    console.log("Child is $10 admission")
} else if (age <65) {
    console.log("Adult is $20 admission")
} else {
    console.log("Senior is $10 admission")
}

// nesting

const password = prompt("please enter a new password").toString();

if (password.length >=6){
    if(password.indexOf(' ')===-1) {
        console.log("Good job, valid password")
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("Weak password. Too short. Must be 6+ Characters")
}
 
// logical operators && || !

const password2 = prompt("please enter another password").toString();

if (password2.length >=6 && password2.indexOf(' ') === -1){
        console.log("Good job, valid password")
}else {
    console.log("Weak password. Too short. Must be 6+ Characters. Cannot contain spaces")
}

