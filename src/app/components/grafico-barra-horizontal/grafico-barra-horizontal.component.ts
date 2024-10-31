import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrl: './grafico-barra-horizontal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraficoBarraHorizontalComponent { }
