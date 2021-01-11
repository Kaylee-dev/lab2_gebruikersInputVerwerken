var nameQuestion = prompt("Hoeveel namen wilt u in de array stoppen? (minimaal 3)");
var names = [];
//Een lega array om later namen in te zetten.

document.write("<h2>De ingevoerde namen in de array zijn:</h2>");

if (nameQuestion >= 3) {
	for(var i = 0; i < nameQuestion; i++){
		var question = prompt("Welke naam wilt u invoeren?");
		names.push(question); 
		// push zet wat ingevoerd is bij question in de lege array.
	}

	for(var i = 0; i < nameQuestion; i++){
		document.write(names[i] + "<br/>");
		}

		for(var i = names.length -1; i >= 0; i--){
			document.write(names[i] + "<br/>");
			}
			// Hier is de for loop reversed zodat de namen ook andersom komen te staan

}else{
	alert("Vul minimaal 3 in");
}

console.log(names);