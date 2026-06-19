import { Component, inject } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Navbar} from './components/sections/navbar/navbar';
import {Footer} from './components/sections/footer/footer';
import { SeoService } from './core/seo/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly seoService = inject(SeoService);
  protected title = 'cyril-defaye-fr';
}
