import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../../../data/projects.data';
import { Project } from '../../../models/project.model';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.css'
})
export class ProjectDetail {
  private route = inject(ActivatedRoute);

  project: Project | undefined;

  constructor() {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = projects.find(p => p.slug === slug);
  }
}