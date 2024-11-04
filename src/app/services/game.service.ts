import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GameInterface } from '../interfaces/game.interface';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private readonly http = inject(HttpClient);
  juegos: any;

  getGames(): Observable<GameInterface[]> {
    return this.http
      .get<GameInterface[]>(`${environment.url}/goty`)
      .pipe(tap((games) => (this.juegos = games)));
  }

  voteGame(id: string): Observable<any> {
    return this.http
      .post(`${environment.url}/goty/${id}`, {})
      .pipe(catchError((err) => of(err.error)));
  }
}
