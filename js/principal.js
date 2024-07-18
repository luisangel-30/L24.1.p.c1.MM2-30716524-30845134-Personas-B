/*Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y reporte al final la edad promedio y la edad mayor entre las mujeres.
Se tienen las siguientes personas: Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16); la salida requerida presenta el siguiente formato:
Edad promedio: 18.50
Edad mayor entre las mujeres: 19 */

import CL_personas from "./CL_personas.js";
import CL_reporte from "./CL_reporte.js";

let estud1 = new CL_personas("Luis", 15,"M");
let estud2 = new CL_personas("Ana", 19, "F");
let estud3 = new CL_personas("José", 21, "M");
let estud4 = new CL_personas("Carmen", 17, "F");
let estud5 = new CL_personas("Rosa", 18, "F");
let estud6 = new CL_personas("José", 22, "M");
let estud7 = new CL_personas("Maria", 17,"F");
let estud8 = new CL_personas("Luz", 19,"F");
let estud9 = new CL_personas("Rafael", 23,"M");
let estud10 = new CL_personas("Liz", 15,"F");
let estud11 = new CL_personas("Marcos", 20,"M");
let estud12 = new CL_personas("Leo", 16,"M");

let reporte = new CL_reporte();

reporte.procesarpersonas(estud1);
reporte.procesarpersonas(estud2);
reporte.procesarpersonas(estud3);
reporte.procesarpersonas(estud4);
reporte.procesarpersonas(estud5);
reporte.procesarpersonas(estud6);
reporte.procesarpersonas(estud7);
reporte.procesarpersonas(estud8);
reporte.procesarpersonas(estud9);
reporte.procesarpersonas(estud10);
reporte.procesarpersonas(estud11);
reporte.procesarpersonas(estud12);

let salida = document.getElementById("salida");

salida.innerHTML=`
<br> Edad promedio ${reporte.edadpromedio()}
 <br> Edad mayor entre las mujeres: ${reporte.mayoredad()}
`