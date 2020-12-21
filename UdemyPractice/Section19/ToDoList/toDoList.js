//Commands
//"new"- Add a todo
//"list"- List all todos
//"delete"- remove a specific todo
//"quit"- quit app
//"q"- quit the app

let input = prompt('What would you like to do?').toLowerCase();
const todos =['Collect Chicken Eggs','Clean Litter Box'];

// could replace the arguments for this while loop to while(!(input === 'quit' || input === 'q'))
while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        // used for spacing between commands for clarity
        console.log('****************')
        for(let i = 0; i < todos.length; i++){
            //prints the index and the string todo in the console
            console.log(`${i}: ${todos[i]}`);
        }
        // used for spacing between commands for clarity
        console.log('****************')
    } else if (input === 'new'){
        const newTodo = prompt('Okay, what is the new todo?');
        // push is used to add the new todo to the end of the array todos
        todos.push(newTodo);
        console.log(`${newTodo} was added to the list`);
    } else if (input === 'delete'){
        const index = parseInt(prompt('Okay, what is the index of the item you wish to delete?'));
        // checks to see that the inputted index is valid in the array todos
        if(index >= 0 && index < todos.length){
            // Stops the script from deleting when NaN is returned from parseInt(prompt())
            if(!Number.isNaN(index)){
                //deletion of item
                const deletedItem = todos.splice(index, 1);
                console.log(`${deletedItem[0]} was removed from the list`);
            } else {
                // If this runs then, parseInt returned NaN
                console.log('Unknown index.')
            }
        } else {
            console.log('Index entered was not in the list')
        }
    }
    input = prompt('What would you like to do?');
}
console.log('Okay, you quit the app.')