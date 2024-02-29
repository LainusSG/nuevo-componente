import { Component, ElementRef, ViewChild } from '@angular/core';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';


const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 12, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 13, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 21, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 22, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 23, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 31, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 32, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 33, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 34, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 35, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 36, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 37, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 38, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 39, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 40, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 41, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 42, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 43, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 44, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 45, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 46, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 47, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 48, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 49, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 50, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  
];



const date = new Date();const año = date.getFullYear();const mes = date.toLocaleString('default', { month: 'short' });const mes2 = date.toLocaleString('default', { month: 'long' });const dia = date.getDate(); const hora = date.getHours();const minutos = date.getMinutes();


function buildTableBody(data: { [x: string]: { toString: () => any; }; }[], columns: (string | number)[]) {
  var body: any[][] = [];

  body.push(columns, );

  data.forEach(function(row: { [x: string]: { toString: () => any; }; }) {
      var dataRow: any[] = [];

      columns.forEach(function(column: string | number) {
          dataRow.push({text : row[column].toString(), alignment : 'center', color : 'black', bold:false, fontSize: 9, margin: [0, 10, 0, 0],});
      })

      body.push(dataRow, );
  });

  return body;
}

function table(data: { [x: string]: { toString: () => any; }; }[] | { name: string; age: number; }[], columns: (string | number)[]) {
  return {
    style: 'tableExample',
      table: {
        widths: ['25%','25%','25%','25%'],
				headerRows: 1,
          body: buildTableBody(data, columns),
      },layout: 'noBorders'
    
  };
}


@Component({
  selector: 'app-emergente6',
  templateUrl: './emergente6.component.html',
  styleUrl: './emergente6.component.css'
})
export class Emergente6Component {
 


  nombrejefa= "María Dolores Rodríguez Ramírez";
  today: number = Date.now();
  @ViewChild('pdfTable') pdfTable!: ElementRef;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;




  dataset = [
    { name: "Canada", value: 460 },
    { name: "U.S.A", value: 164 },
    { name: "México", value: 1566 },
    { name: "Brazil", value: 398 },
  ];
 

 
  

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
      const pdfTable = this.pdfTable.nativeElement;
      var html = htmlToPdfmake(pdfTable.innerHTML);

    const pdfDefinition: any = {

      
      pageSize: 'Letter',
      pageMargins: [30, 240, 30, 60],

      background: [
        {
          "image":"logo",
            width: 90,
            margin:[30,35,0,0]
        },

        {
          "image":"logo",
            width: 550,
            margin:[30,80,0,0],
            opacity: 0.1
        }
      ],

      header:[
     
        {text: 'INSTITUTO NACIONAL DE CIENCIAS MÉDICAS NUTRICIÓN SALVADOR ZUBIRÁN', style: 'header2'},
        {text: 'SUBDIRECCIÓN DE ENFERMERÍA: '+this.nombrejefa, style: 'header'},
        {text: 'DEPARTAMENTO DE ENFERMERÍA', style: 'header'},
        {text: 'CENTRAL DE EQUIPOS Y ESTERILIZACIÓN', style: 'header'},
        {text: 'Fecha de Impresión: '+dia +' de '+ mes2 +' del '+ año +', '+ hora + ':' + minutos + 'hrs', style: 'header3'},
        {text: 'CICLOS DE ESTERILIZACIÓN PARADOS ', style: 'header2'},
        {text: 'Rango de Fecha: '+/*aqui va la primera la variable de fecha del piker*/'10/08/23'+' - '+/*aqui va la segunda la variable de fecha del piker*/'16/12/23', style: 'header3' },
       
   
      ],

      content: [

        html,
         
        {text: 'CICLOS DE ESTERILIZACIÓN PARADOS', style: 'titulo1'},
        table(ELEMENT_DATA, ['position', 'name', 'weight', 'symbol'], ),
    ],
    
  images:{
    
    "logo" : await this.getBase64ImageFromURL(
        "../../assets/LOGO PNG NUTRICIÓN.png")
      
  },
    styles: {

      header: {
        fontSize: 11,
        bold: true,
        margin: [40, 7, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      header2: {
        fontSize: 11,
        bold: true,
        margin: [40, 30, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
       
      },
      header3: {
        fontSize: 11,
        bold: true,
        margin: [0, 27, 30, 0],
        alignment: "right",
        color: 'black',
        position:'fixed',
      },

 
      footer: {
        fontSize: 10,
        margin: [0, 20, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
      },
      tableExample: {
        fontSize: 11,
        bold: true,
        margin: [0, 10, 0, 0],
        alignment : 'center',
        color: 'black'
      },
      titulo1: {
        fontSize: 11,
        bold: true,
        margin: [40, 0, 0, 0],
        alignment: "center",
        color: 'black',
        position:'fixed',
       
      },
    },
    
    footer:[
      
      {text: 'TRACY © '+año, style: 'footer'},
    ]
    }
      
    
 
    const pdf =  pdfMake.createPdf(pdfDefinition);
    pdf.download('Ciclos de Esterilización Parados '+ dia + '/'+mes2+'/'+año + ' ('+ hora + '/'+ minutos + 'hr)');

    

    
  }

  
}
