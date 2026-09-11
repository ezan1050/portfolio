import { Component, signal, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  // --- Effet Matrix (nom) ---
  private readonly targetName = 'Ezan Bhatti';
  private readonly chars = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';
  displayName = signal('');
  private scrambleInterval: any;

  // --- Effet terminal (rôle) ---
  private readonly roles = ['Software Developer', 'Cloud Administrator', 'IT Helpdesk'];
  displayRole = signal('');
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private terminalTimeout: any;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.displayName.set(this.targetName);
      this.displayRole.set(this.roles[0]);
      return;
    }

    this.startScramble();
    this.typeRole();
  }

  private startScramble() {
    let revealed = 0;

    this.scrambleInterval = setInterval(() => {
      let result = '';

      for (let i = 0; i < this.targetName.length; i++) {
        if (i < revealed) {
          result += this.targetName[i];
        } else if (this.targetName[i] === ' ') {
          result += ' ';
        } else {
          result += this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }

      this.displayName.set(result);
      revealed++;

      if (revealed > this.targetName.length) {
        clearInterval(this.scrambleInterval);
        this.displayName.set(this.targetName);
      }
    }, 80);
  }

  private typeRole() {
    const currentRole = this.roles[this.roleIndex];

    if (this.isDeleting) {
      this.charIndex--;
      this.displayRole.set(currentRole.substring(0, this.charIndex));
    } else {
      this.charIndex++;
      this.displayRole.set(currentRole.substring(0, this.charIndex));
    }

    let delay = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.charIndex === currentRole.length) {
      delay = 1500;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      delay = 300;
    }

    this.terminalTimeout = setTimeout(() => this.typeRole(), delay);
  }

  ngOnDestroy() {
    if (this.scrambleInterval) clearInterval(this.scrambleInterval);
    if (this.terminalTimeout) clearTimeout(this.terminalTimeout);
  }
}