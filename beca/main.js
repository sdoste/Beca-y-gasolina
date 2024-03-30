let age = parseInt(prompt("¿Tienes derecho a una beca Hack-Iron? ¡Averígualo! ¿Cuántos años tienes?"));
let city = prompt("¿En qué ciudad vives?");
let family = prompt("¿Tienes familia numerosa?");
let genius = prompt("¿Tienes dotes inusitadas para la programación?")

console. log(age);
console. log(city);
console. log(family);
console. log(genius);

if (age >= 18  && (city.toLowerCase() == "barcelona")){
    document.write("¡Enhorabuena! Tienes derecho a una beca Hack-Iron :)");    
}
else if (age >= 30 && (family.toLowerCase() == "sí" || family.toLowerCase() == "si"))   {
    document.write("¡Enhorabuena! Tienes derecho a una beca Hack-Iron :)");  
} 
else if ((age >=12 && age <= 18) && (genius.toLowerCase() == "sí" || genius.toLowerCase() == "si"))  {
    document.write("¡Enhorabuena! Tienes derecho a una beca Hack-Iron :)");  
} 
else {
    document.write("¡Lo siento! No cumples los requisitos para la beca Hack-Iron :(");
}