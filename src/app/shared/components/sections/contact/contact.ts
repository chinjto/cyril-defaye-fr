import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'section-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {}
