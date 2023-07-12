/*

El objetivo del código es calcular el costo total de alquilar un automóvil para diferentes duraciones de alquiler (días). A continuación, se presentan las reglas que se deben seguir:

Cada día de alquiler del automóvil cuesta $40.
Si se alquila el automóvil durante 7 días o más, se aplica un descuento de $50 al costo total.
Alternativamente, si se alquila el automóvil durante 3 días o más, se aplica un descuento de $20 al costo total.
El código debe ser capaz de calcular el costo total del alquiler del automóvil para cualquier número de días (d).


*/

//Comprobamos si el valor esta en un rango determinado y aplicamos la operación correspondiente
export function rentalCarCost(d: number): number {
    return d > 0 && d < 3 ? d * 40 : d >= 3 && d < 7 ? d * 40 - 20 : d >= 7 ? d * 40 - 50: 0;
  }


console.log(rentalCarCost(2));