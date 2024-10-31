import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GraficoBarraHorizontalComponent } from '../../components/grafico-barra-horizontal/grafico-barra-horizontal.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, GraficoBarraHorizontalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent {}
