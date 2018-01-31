class TaskCollector {
	constructor(tasks = []){
		this.tasks = tasks;
	}

	log(){
		this.tasks.forEach(task => console.log(tasks));
	}

}

class Task {


}

// new TaskCollector([
// 	new Task, new Task, new Task
// ]).prepare();


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

function sum(answer = "Answer ", ...numbers){

	//using the rest operator (...) you can perform mathematical operations
	//on an unknown set of values. e.g sum(2,3,0,2,4)
	//then we use the reduce method to give us the previous and current values
	//of the arguments passed to the function
	/*
		NB: If you want to have a second parameter when using the rest operator, 
			then it must come first as shown with `answer` above cos the rest operator
			will take everything to the right hand side of the arguments
	*/

		// return numbers.reduce( function(prev, current){

		// 	return answer + (prev + current);
		
		// } );

	//Refactor the return statement using the arrow function

	return numbers.reduce( (prev, current) => answer + (prev + current) );
	
}


console.log(sum(1,2,3,4,5)); //any amount of number passed to this method will be summed


/*	5 - SPREAD OPERATOR */

/*
	The spread operator which is the oppposite of the rest operator
	simply takes an array and splits it into the arguments of a function.
	See below.
*/

function spreadSum(x, y){

	return x + y;

}

let num = [1 , 2];

console.log(spreadSum(...num));


/*	6 -	TEMPLATE STRINGS - USE THE BACK TICKS!!! */

// Old fashioned way of building html in JS:
	let template = [
		'<div class="alert">',

			'<p>Hello World</p>',

		'</div>'
	].join('');

	console.log(template);

//new es6 features: back tick (`) allows you to use 
//dynamic values within your markup without the hassle of concatenation
//and dealing with white spaces

	let foo = "Foo";

	let newTemplate = 
		`<div class="alert">,

			<p>${foo}</p>,

		</div>`;

	console.log(template);

/*	7 - OBJECT ENHANCEMENTS - NEW FEATURE IN ES6 */

	function getPerson(){

		let name = "Samuel";
		let age = "23";

		//old fashioned way
		// return {
		// 	name : name,
		// 	age : age
		// }

		//with es6
		return {
			name,

			age,

			//old fashioned way of declaring function as object
			// greet: function(){
			// 	return "Hello "+name+ ". I am "+age+" years old.";
			// }

			//new es6 method of function declaration
			greet(){

				return `Hello ${this.name}. I am ${this.age} years old.`;

			}
		}
	}

	//alert(getPerson().greet());

	/*	OBJECT DESTRUCTURING	*/

	let person = {

		name : 'Samuel',

		age : '23' 
	};

	let {name, age} = person;


	//alert(name);

	//More example on object DESTRUCTURING in ES6

		function getData({results, count}){

			console.log(results, count);

		}

		getData({

			name: 'Samuel',

			age: 23,

			results: ['foo', 'bar'],

			count: 30
		
		});


	/*	INSTEAD OF THIS (ES5)	*/	

		function getData(data){

			var results = data.results;

			var count = data.count;

			console.log(results, count);

		}

		getData({

			name: 'Samuel',

			age: 23,

			results: ['foo', 'bar'],

			count: 30
		
		});

