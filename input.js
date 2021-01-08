var nameQuestion = prompt("Hoeveel namen wilt u in de array stoppen?");

if (nameQuestion == 3) {
	for(i = 0; i <= 2; i++){
		var question = prompt("Welke naam wilt u invoeren?");
		document.write(question + "<br>");	
	}
}