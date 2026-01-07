import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  standalone: false,
  template: `
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-xl text-gray-600 mt-4">Page Not Found</p>
      <a routerLink="/" class="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Go Home</a>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {}
