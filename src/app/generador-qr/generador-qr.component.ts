import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();


const fecha =dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs';

const area = 'Almacén CEyE'
const turno = 1;



@Component({
  selector: 'app-generador-qr',
  templateUrl: './generador-qr.component.html',
  styleUrl: './generador-qr.component.css'
})
export class GeneradorQRComponent {

Nombre='José Lino Santos García';
Set='Set de Laparotomia';
Fechacad='12/02/2023';
Fechaprep='02/02/2023';

infQR='pinzas lavadas';


  getBase64ImageFromURL(url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.setAttribute("crossOrigin", "anonymous");
    
      img.onload = () => {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
    
        var ctx = canvas.getContext("2d");
        ctx!.drawImage(img, 0, 0);
    
        var dataURL = canvas.toDataURL("image/png");
    
        resolve(dataURL);
      };
    
      img.onerror = error => {
        reject(error);
      };
    
      img.src = url;
    });}
  
    async createPDF(){
 
    const pdfDefinition: any = {

      pageSize: {
    width: 196,
    height: 98,
  },
      pageMargins: [ 0, 25, 0, 0 ],
      pageOrientation: 'landscape',   
 

      header:[
     
      {text: 'INSTITUTO NACIONAL DE CIENCIAS MÉDICAS Y ', style: 'header2'},
      {text: 'NUTRICIÓN SALVADOR ZUBIRÁN', style: 'header'},
      ],

      content: [
      {text: 'Nombre:', style: 'titulo1'},
      {text: this.Nombre, style: 'titulo2'},
 
      {text: 'Set:', style: 'titulo1'},
      {text: this.Set, style: 'titulo2'},
      
      {text: 'Fecha de Preparación:', style: 'titulo1'},
      {text: this.Fechaprep, style: 'titulo2'},


      {text: 'Fecha de Caducidad:', style: 'titulo1'},
      {text: this.Fechacad, style: 'titulo2'},

            { qr: this.infQR, fit: '65' ,position:'fixed',   margin: [48, -60, 0, 0],},
    ],
    
  images:{
    
      
  },
    styles: {

      header: {
        fontSize: 6,
        bold: true,
        margin: [7, 2, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      header2: {
        fontSize: 6,
        bold: true,
        margin: [7, 8, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },

      titulo1: {
        fontSize: 4,
        bold: true,
        margin: [120, 6, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },

       titulo2: {
        fontSize: 3.5,
        bold: false,
        margin: [120, 1, 0, 0],
        alignment: "left",
        color: 'black',
        position:'fixed',
      },
 
 
     
    },
    

    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.print();

    
  }





  
}