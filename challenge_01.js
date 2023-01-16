
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let zahl1, zahl2, summe; // Deklaration
zahl1 = prompt("Bitte eine Zahl eingeben:");  // Wertzuweisung
zahl2 = prompt("Bitte eine weitere Zahl eingeben:");  // Wertzuweisung

summe = parseInt(zahl1) + parseInt(zahl2);  // Umwandlung String -> Number; Summe berechnen
console.log("Die Summe aus beiden Zahlen ist " + summe); // Ausgabe
