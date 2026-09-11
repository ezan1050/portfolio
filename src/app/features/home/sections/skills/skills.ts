import { Component } from '@angular/core';
import { skills } from '../../../../data/skills.data';
import { SkillCategory } from '../../../../models/skills.model';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-skills',
  imports: [ScrollReveal],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {
  categories: SkillCategory[] = skills;
}