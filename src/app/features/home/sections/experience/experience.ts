import { Component } from '@angular/core';
import { experiences } from '../../../../data/experience.data';
import { Experience as ExperienceModel } from '../../../../models/experience.model';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';


@Component({
  selector: 'app-experience',
  imports: [ScrollReveal],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience 
{
  experienceList:ExperienceModel[] = experiences;
}
