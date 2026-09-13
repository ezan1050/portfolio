import { Component } from '@angular/core';
import { certifications } from '../../../../data/certification.data';
import { Certification } from '../../../../models/certification.model';
import { ScrollReveal } from '../../../../shared/directives/scroll-reveal';

@Component({
  selector: 'app-certifications',
  imports: [ScrollReveal],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class Certifications {
  certList: Certification[] = certifications;
}