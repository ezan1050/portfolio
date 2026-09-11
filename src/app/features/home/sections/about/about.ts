import { Component } from '@angular/core';
import { aboutIntro, aboutHighlights } from '../../../../data/about.data';
import { AboutHighlight } from '../../../../models/about.model';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-about',
  imports: [ScrollReveal],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  intro = aboutIntro;
  highlights: AboutHighlight[] = aboutHighlights;
}