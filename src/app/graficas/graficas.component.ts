import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrl: './graficas.component.css'
})
export class GraficasComponent {

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#10394e','	#10597d', '#1caab8', '#a3cfd4', ]
  };
  Paquetes_procesados_por_turno_y_operador = [
    { name: "Canada", value: 100 },
    { name: "U.S.A", value: 254 },
    { name: "México", value: 146 },
    { name: "Brazil", value: 298 },
    { name: "Francia", value: 180 },
    { name: "Rusia", value: 354 },
    { name: "China", value: 246 },
    { name: "Australia", value: 498 },
    { name: "Salvador", value: 500 },
    { name: "Chile", value: 654 },
    { name: "Argentina", value: 346 },
    { name: "Paraguay", value: 498 },
  ];

  Productividad_por_quirofano  = [
    { name: "Canada", value: 400 },
    { name: "U.S.A", value: 234 },
    { name: "México", value: 246 },
    { name: "Brazil", value: 498 },
  ]


  
  Mermas_por_caducidad  = [
    { name: "Canada", value: 650 },
    { name: "U.S.A", value: 453 },
    { name: "México", value: 646 },
    { name: "Brazil", value: 123 },
  ];


  Tipos_de_paquetes_procesados_por_turno  = [
    { name: "Canada", value: 564 },
    { name: "U.S.A", value: 456 },
    { name: "México", value: 159 },
    { name: "Brazil", value: 354 },
  ];

  Cantidad_de_cirugias_por_doctor_y_quirofano  = [
    { name: "Canada", value: 258 },
    { name: "U.S.A", value: 147 },
    { name: "México", value: 396 },
    { name: "Brazil", value: 456 },
  ];

  Paquetes_por_esterilizador  = [
    { name: "Canada", value: 536 },
    { name: "U.S.A", value: 362 },
    { name: "México", value: 142 },
    { name: "Brazil", value: 241 },
  ];

}
