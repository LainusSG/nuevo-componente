
function imprimirElemento(elemento) {
  var ventana = window.open('()','PRINT', 'height=800,width=800');
  ventana.document.write('<link rel="stylesheet" href="../assets/impresion-emergentes.css">'); //Aquí agregué la hoja de estilos
  ventana.document.write('<html>');
  ventana.document.write('<body>');
  ventana.document.write(elemento.innerHTML);
  ventana.document.write('</body>');
  ventana.document.write('</html>');
  ventana.document.close();
  ventana.focus();
  ventana.onload = function() {
    ventana.print();
    ventana.close();
  };
  return true;
}

document.querySelector("#btnImprimirDiv").addEventListener("click", function() {
  var div = document.querySelector("#imprimible");
  imprimirElemento(div);
});











function pruebaDivAPdf() {
  var pdf = new jsPDF('p', 'pt', 'letter');
  source = $('#imprimir')[0];

  specialElementHandlers = {
      '#bypassme': function (element, renderer) {
          return true
      }
  };
  margins = {
      top: 80,
      bottom: 60,
      left: 40,
      width: 522
  };

  pdf.fromHTML(
      source, 
      margins.left, // x coord
      margins.top, { // y coord
          'width': margins.width, 
          'elementHandlers': specialElementHandlers
      },

      function (dispose) {
          pdf.save('Prueba.pdf');
      }, margins
  );
}
