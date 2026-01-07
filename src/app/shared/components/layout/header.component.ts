import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  template: `
    <header class="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <a routerLink="/" class="flex items-center gap-3">
              <img src="/images/logo.png" alt="TechPioneerIT Logo" class="h-16 w-auto object-contain">
            </a>
          </div>

          <!-- Desktop Menu -->
          <nav class="hidden md:flex space-x-8">
            <a *ngFor="let item of navItems" 
               [routerLink]="item.path" 
               routerLinkActive="active-link"
               [routerLinkActiveOptions]="{exact: item.path === '/'}"
               class="nav-link text-secondary hover:text-accent transition-colors duration-300 text-sm font-medium uppercase tracking-wide relative">
              {{ item.label }}
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMobileMenu()" class="text-secondary hover:text-primary focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path *ngIf="!isMobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path *ngIf="isMobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen()" class="md:hidden bg-white border-t border-gray-100 animate-fade-in">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a *ngFor="let item of navItems" 
             [routerLink]="item.path" 
             (click)="closeMobileMenu()"
             routerLinkActive="bg-gray-50 text-accent"
             [routerLinkActiveOptions]="{exact: item.path === '/'}"
             class="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-accent hover:bg-gray-50 transition-colors">
            {{ item.label }}
          </a>
        </div>
      </div>
    </header>
    <!-- Spacer for fixed header -->
    <div class="h-20"></div>
  `,
  styles: [`
    .nav-link {
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #3b82f6, #06b6d4);
      transition: transform 0.3s ease-in-out;
      transform-origin: center;
    }
    
    .nav-link:hover::after {
      transform: translateX(-50%) scaleX(1);
    }
    
    .nav-link.active-link::after {
      transform: translateX(-50%) scaleX(1);
    }
    
    .nav-link.active-link {
      color: #3b82f6;
      font-weight: 600;
    }
  `]
})
export class HeaderComponent {
  isMobileMenuOpen = signal(false);

  navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Careers', path: '/careers' },
    { label: 'Contact', path: '/contact' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
