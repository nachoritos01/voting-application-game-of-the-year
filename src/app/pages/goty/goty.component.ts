import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-goty',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './goty.component.html',
  styleUrl: './goty.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GotyComponent { }
