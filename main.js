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