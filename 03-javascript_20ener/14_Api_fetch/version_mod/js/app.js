import { btn1, obtenerDatos } from "./text.js";
import { btn2, obtenerDatos as obtenerDatos2 } from "./empleado.js";
import { btn3, obtenerDatos as obtenerDatos3 } from "./empleados.js";
import {
  btn3a,
  input_valor,
  obtenerDatos as obtenerDatos3a,
} from "./empleados_2.js";
console.log(btn1);

btn1.addEventListener("click", obtenerDatos);
btn2.addEventListener("click", obtenerDatos2);
btn3.addEventListener("click", obtenerDatos3);
btn3a.addEventListener("click", () => {
  input_valor = Number(document.querySelector("#empleado_id").value);
  obtenerDatos3a(input_valor);
});
