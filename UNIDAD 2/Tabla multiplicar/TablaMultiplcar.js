function TablaMultiplicar() {
    
    var numero = document.getElementById("numero").value;
  
    // Crear la tabla
    var tabla = "<table>";
  
    for (var i = 1; i <= 10; i++) {
      //fila
      tabla += "<tr>";
  
      // celdas
      tabla += "<td>" + numero + " x " + i + "</td>";
      tabla += "<td>=</td>";
      tabla += "<td>" + (numero * i) + "</td>";
  
      // Cerrar la fila
      tabla += "</tr>";
    }
  
    // Cerrar la tabla
    tabla += "</table>";
  
    // Mostrar la tabla en la página
    document.getElementById("tabla").innerHTML = tabla;
  }
  