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

  private readonly targetName = 'Ezan Bhatti';
  private readonly chars = 'Z0123456789ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ';

  displayName = signal('');
  private intervalId: any;

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      // Côté serveur : afficher directement le nom final
      this.displayName.set(this.targetName);
      return;
    }

    let revealed = 0;

    this.intervalId = setInterval(() => {
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
        clearInterval(this.intervalId);
        this.displayName.set(this.targetName);
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}