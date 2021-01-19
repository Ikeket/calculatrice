restart = false;
do {
	do {
		var choix = prompt(
			"Souhaitez-vous faire une :\n1 - Addition\n2 - Multiplication\n3 - Soustraction\n4 - Division"
		);
		console.log(choix);
	} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

	do {
		var premierNombre = prompt("Choisissez un premier chiffre :");
		var deuxiemeNombre = prompt("Choisissez un deuxième chiffre :");
		premierNombre = Number(premierNombre);
		deuxiemeNombre = Number(deuxiemeNombre);
		console.log(premierNombre);
	} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

	function calculatrice(nombreA, nombreB) {
		let operation;
		switch (choix) {
			case "1":
				operation = nombreA + nombreB;
				break;
			case "2":
				operation = nombreA * nombreB;
				break;
			case "3":
				operation = nombreA - nombreB;
				break;
			default:
				if (nombreB == 0) {
					alert("Impossible de diviser par 0.");
				} else {
					operation = nombreA / nombreB;
				}
		}
		return operation;
	}

	let resultat = calculatrice(premierNombre, deuxiemeNombre);
	alert("Voici le résultat de votre opération : " + resultat + ".");

	restart = confirm("Souhaitez-vous recommencer un calcul ?");
} while (restart);
