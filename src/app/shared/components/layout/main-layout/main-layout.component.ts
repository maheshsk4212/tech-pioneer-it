import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  template: `
    <div class="flex flex-col min-h-screen">
      <app-header></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-toast></app-toast>
    </div>
  `,
  styles: []
})
export class MainLayoutComponent {
  constructor() {
    console.log('MainLayoutComponent initialized');
  }
}
