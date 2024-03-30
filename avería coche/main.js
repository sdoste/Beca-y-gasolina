// Oh! Estás aparcado en la calle, pero el coche no arranca...

// Si vives cerca AND tienes ganas de caminar, te vas andando y ya lo arreglarás mañana. Si no, realiza las siguientes comprobaciones:
//            - Tiene gasolina?
//                         * No => hay que poner gasolina
//                                   - Tienes dinero?
//                                  • Si => poner gasolina
//                                  • No => vas en metro
//                           * Sí que tiene gasolina:


//                                   - Tiene batería?
//                                                * No => recargar batería
//                                                * Sí => pásate por el mecánico

let cercania = prompt("Lamentamos tu avería. ¿Vives cerca de donde te encuentras ahora?");
let animo = prompt("¿Te encuentras en situación y ánimo de caminar?");

if (((cercania.toLowerCase() == "sí") || (cercania.toLowerCase() =="si")) && ((animo.toLowerCase() == "sí") || (animo.toLowerCase() == "si"))){
    document.write("Por favor, vuelve caminando a tu casa. El servicio técnico irá a arreglar tu coche mañana.")
 
}  
else if ((cercania.toLowerCase() == "no") || (animo.toLowerCase() == "no")){
    let gasolina = prompt("¿Hay gasolina en el vehículo?")
    //no gasolina
    if (gasolina.toLowerCase() == "no" ){
        let dinero = prompt("Hay que poner gasolina. ¿Tienes dinero?");
        if ((dinero.toLowerCase() == "sí") || (dinero.toLowerCase() == "si")) {
        document.write("Por favor, pon gasolina en el vehículo.")
        }
        else if (dinero.toLowerCase() == "no") {
            document.write("Por favor, vuelve en transporte público a tu casa, como el metro.")
        }
    // sí gasolina
    }
    else if ((gasolina.toLowerCase == "sí") || (gasolina.toLowerCase() == "si")){
        let bateria = prompt("¿Le queda batería al vehículo?");
        if (bateria.toLowerCase() == "no") {
            document.write("Por favor, recarga la batería del vehículo.")
        }
        else if ((bateria.toLowerCase() == "sí") || (bateria.toLowerCase() =="si")) {
            document.write("Por favor, lleva tu vehículo al mecánico más cercano.")
        }
    }
}