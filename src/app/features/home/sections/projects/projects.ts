import { Component } from '@angular/core';
import { projects } from '../../../../data/projects.data';
import { Project } from '../../../../models/project.model';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-projects',
  imports: [ScrollReveal, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
projectList : Project[] = projects;
}
