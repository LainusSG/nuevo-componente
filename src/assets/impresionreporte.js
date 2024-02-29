
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



























