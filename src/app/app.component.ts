import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sort Table';
  
  constructor() {
  }
  
  sorTable(n:number, type:string){
    
    var table = document.querySelector<HTMLTableElement | any>('#table');
    var rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;

		switching = true;
		  //Set the sorting direction to ascending: // Establecer la dirección de clasificación en ascendente
		dir = "asc";

		  /*Make a loop that will continue until no switching has been done:*/ /// Haga un bucle que continuará hasta que no se haya realizado ningún cambio.
	  	while (switching) {
		    switching = false;
		    rows = table.rows;

		    /*Loop through all table rows (except the first, which contains table headers):*/ // Recorre todas las filas de la tabla (excepto la primera, que contiene encabezados de tabla
		    for (i = 1; i < (rows.length - 1); i++) {
			      //start by saying there should be no switching:
		        shouldSwitch = false;
			      /*Get the two elements you want to compare, one from current row and one from the next:*/ // Comience diciendo que no debería haber cambios:
		        x = rows[i].getElementsByTagName("td")[n];
		        y = rows[i + 1].getElementsByTagName("td")[n];

  		      /*check if the two rows should switch place, based on the direction, asc or desc:*/ // Obtenga los dos elementos que desea comparar, uno de la fila actual y otro de la siguiente:
		        if (dir == "asc") {
			        if ((type=="str" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) > parseFloat(y.innerHTML))) {
						    //start by saying: no switching is done: // comience diciendo: no se realiza ningún cambio
			          //if so, mark as a switch and break the loop: // si es así, marque como un interruptor y rompa el bucle:
			          shouldSwitch= true;
			          break;
			        }
		        } else if (dir == "desc") {
              if ((type=="str" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) || (type=="int" && parseFloat(x.innerHTML) < parseFloat(y.innerHTML))) {
                //if so, mark as a switch and break the loop: // si es así, marque como un interruptor y rompa el bucle:
			          shouldSwitch = true;
			          break;
			        }
		        }
		    }
		    if (shouldSwitch) {
			      /*If a switch has been marked, make the switch and mark that a switch has been done:*/ //  Si se ha marcado un interruptor, hágalo y marque que se ha realizado un cambio:
		        rows[i].parentNode.insertBefore(rows![i + 1], rows[i]);
		        switching = true;
			      //Each time a switch is done, increase this count by 1: // Cada vez que se realiza un cambio, aumente este recuento en 1:
		        switchcount ++;
		    } else {
			      /*If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again.*/ // Si no se ha realizado ningún cambio Y la dirección es "asc", establezca la dirección en "desc" y vuelva a ejecutar el ciclo while. * /
		        if (switchcount == 0 && dir == "asc") {
			        dir = "desc";
			        switching = true;
		        }
		    }
	  	}

  }


}
