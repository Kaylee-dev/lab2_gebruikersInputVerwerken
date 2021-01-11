var nameQuestion = prompt("Hoeveel namen wilt u in de array stoppen?");
var names = [];

document.write("<h2>De ingevoerde namen in de array zijn:</h2>");

if (nameQuestion >= 3) {
	for(var i = 0; i < nameQuestion; i++){
		var question = prompt("Welke naam wilt u invoeren?");
		names.push(question);

	}
	for(var i = 0; i < nameQuestion; i++){
			document.write(names[i] + "<br/>");
		}
		for(var i = nameQuestion; i >= 0; i--){
			document.write(names[i] + "<br/>");
		}
}

console.log(names);