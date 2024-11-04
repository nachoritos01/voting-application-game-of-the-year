import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartInterface } from '../../interfaces/chart.interface';

@Component({
  selector: 'app-grafico-barra-horizontal',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss'],
})
export class GraficoBarraHorizontalComponent {
  @Input({ required: true }) results!: ChartInterface[];
  multi!: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };
  intervalo: any;

  constructor() {}
}
