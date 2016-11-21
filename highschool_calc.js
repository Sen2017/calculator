function calculator (a,b,c){
	if (a == "add"){
		console.log(b + c);
	}
	else if (a == "subtract"){
		console.log(b - c);
	}
	else if (a == "divide"){
		console.log(b / c);
	}
	else if (a == "multiply"){
		console.log(b * c);
	}else{
		console.log("I actually suck at math LOL");
	}
}

calculator("multiply", 5, 5);