import { Component } from '@angular/core';
import { Hero } from '../sections/hero/hero';
import { Skills } from '../sections/skills/skills';
import { About } from '../sections/about/about';
import { Projects } from '../sections/projects/projects';

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, About, Projects],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
