

//———————————————————————————————————————————

console.log(".")
console.log(".")
console.log(".")

console.log("——————————————————————————— PYRAMID ———————————————————————————")
console.log(".")
console.log(".")


let height = prompt("Le nombre d'étage ?", "");

function createHalfPyramid (height) {
	
	for ( i = 1; i <= height; i++) {
		var row = '';
		
		for ( j = 1; j <= (height - i); j++) {
		  row += ' ';
		}
		
		for ( k = 1; k <= i; k++) {
		  row += '*';
		}
		
		console.log(row);
	  }
  }
  
  createHalfPyramid(height);
  
