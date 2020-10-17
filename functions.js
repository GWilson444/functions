//isEven

// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	return false;
// }

function isEven(num) {
	return num % 2 === 0
}

//factorial

function factorial(num) {
	//define a result variable
	let result = 1;
	//calculate factorial and store value in result
	for(let i = 1; i <= num; i++) {
		result *= i;
	}
	//return the result variable
	return result;
}

//kebabToSnake

function kebabToSnake(str){
	//replace all '-' with '_'
	const regex = /-/g;
	const newStr = str.replace(regex, '_');
	return newStr;
}