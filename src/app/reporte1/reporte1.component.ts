import { Component } from '@angular/core';

import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';



@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrl: './reporte1.component.css'
})
export class Reporte1Component {

  constructor () {
  }

  async createForm() {
//--------------------------------- comenzar a borrar ------------------------------------------

    const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
    const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
  
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    const { width, height } = firstPage.getSize()
    firstPage.drawText('This text was added with JavaScript!', {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    })
  
    const pdfBytes = await pdfDoc.save()

    //--------------------------- Dejar de Borrar------------------------------------------
    this.saveByteArray('test.pdf', pdfBytes); //-------- esta linea de codigo convierte la funcion de arriba en el formato reconocido por angulars
  }


  saveByteArray(reportName: string, byte: BlobPart) {
    var blob = new Blob([byte], {type: "application/pdf"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };
}