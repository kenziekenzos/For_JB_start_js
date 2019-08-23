
//———————————————————————————————————————————
console.log("——————————————————————————— FACTORIEL ———————————————————————————")

console.log(".")
console.log(".")
console.log(".")


var n = prompt("ton chiffre?", "");

	var f=1,i=1;
	while(i<=n){
		f*=i;
		i++;
	}

console.log("La factorielle de " + n + " est " + f ) ;
