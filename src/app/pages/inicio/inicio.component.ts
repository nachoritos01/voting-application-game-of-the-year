import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { GraficoBarraHorizontalComponent } from '../../components/grafico-barra-horizontal/grafico-barra-horizontal.component';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { GameInterface } from '../../interfaces/game.interface';
import { ChartInterface } from '../../interfaces/chart.interface';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, GraficoBarraHorizontalComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InicioComponent implements OnInit {
  private readonly firestore: Firestore = inject(Firestore);
  items$!: Observable<any[]>;
  games = signal<ChartInterface[]>([]);
  ngOnInit(): void {
    const aCollection = collection(this.firestore, 'goty');
    this.items$ = collectionData(aCollection);

    this.items$
      .pipe(
        map((items: GameInterface[]) =>
          items.map(({ name, votos }) => ({
            name,
            value: votos,
          }))
        )
      )
      .subscribe((data) => {
        this.games.set(data);
      });
  }
}
