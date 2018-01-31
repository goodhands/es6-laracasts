class TaskCollector {
	constructor(tasks = []){
		this.tasks = tasks;
	}

	log(){
		this.tasks.forEach(task => console.log(tasks));
	}

	class Task {

	}

}

new TaskCollector([
	new Task, new Task, new Task
]).prepare();


//EXAMPLE TWO

/*		
	The difference between "let, var and const"

	var - With this sort of variable declaration, there is variable hoisting (only in JS).
		  such that every variable declaration goes to the top of the page.
	
	let - This variable declaration only works within the block it was declared in. (e.g - within an if block)

	const - This sets an apparent constant variable such that the variable cannot be re-assigned but the value can
			be changed using some array or string functions like {variableName.push(newValue)}

*/

let names = ['Samuel', 'Emmanuel', 'Segun', 'Adams'];

names = names.map(name => name + ' is great.');

console.log(names);


/*		3 - setting default values for functions in es6		*/

function getDefaultDiscount ( ){
	return .10;
}

function applyDiscount(cost, discount = getDefaultDiscount() ){

	return cost - (cost * discount);
}

/*	4 - REST OPERATOR (...)	*/

function sum(...numbers){

	return numbers.reduce(function(prev, current)){

		return prev + current;
	
	}
	
}


console.log(sum(1,2,3,4,5)); //any amount of number