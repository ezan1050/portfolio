import { Component } from '@angular/core';
import { Hero } from '../sections/hero/hero';
import { Skills } from '../sections/skills/skills';
import { About } from '../sections/about/about';
import { Projects } from '../sections/projects/projects';
import { Certifications } from "../sections/certifications/certifications";

@Component({
  selector: 'app-home',
  imports: [Hero, Skills, About, Projects, Certifications],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
