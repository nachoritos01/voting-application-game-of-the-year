import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameInterface } from '../../interfaces/game.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GotyComponent implements OnInit {
  private readonly gameService = inject(GameService);
  public games = signal<GameInterface[]>([]);
  ngOnInit(): void {
    this.getGames();
  }

  getGames() {
    this.gameService.getGames().subscribe((games) => this.games.set(games));
  }

  vote(id: string) {
    this.gameService.voteGame(id).subscribe((resp) => {
      if (resp['ok']) {
        Swal.fire('Gracias', resp['mensaje'], 'success');
      } else {
        Swal.fire('Oops', resp['mensaje'], 'error');
      }
    });
  }
}
