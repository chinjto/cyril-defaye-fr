import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'section-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
