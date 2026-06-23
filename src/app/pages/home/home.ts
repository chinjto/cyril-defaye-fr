import {Component} from '@angular/core';
import {HeroComponent} from '@sections/hero/hero';
import {SkillsComponent} from '@sections/skills/skills';
import {HighlightsComponent} from '@sections/highlights/highlights';
import {ContactComponent} from '@sections/contact/contact';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SkillsComponent,
    HighlightsComponent,
    ContactComponent
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
