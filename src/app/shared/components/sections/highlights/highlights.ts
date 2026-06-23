import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section-highlights',
  imports: [],
  templateUrl: './highlights.html',
  styleUrl: './highlights.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HighlightsComponent {}
