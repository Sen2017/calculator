function calculator (a,b,c){
	if (b == "+"){
		console.log(a + c);
	}
	else if (b == "-"){
		console.log(a - c);
	}
	else if (b == "/"){
		console.log(a / c);
	}
	else if (b == "x"){
		console.log(a * c);
	}else{
		console.log("I actually suck at math LOL");
	}
}

calculator(5, "x", 5);