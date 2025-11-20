import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <footer class="bg-primary text-white pt-16 pb-8">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Company Info -->
          <div>
            <img src="/images/logo.png" alt="TechPioneerIT Logo" class="h-16 w-auto mb-6 object-contain">
            <p class="text-gray-400 mb-6 leading-relaxed">
              Bringing transparency, automation, and dynamic environments to your business. We deliver high-quality solutions tailored to your needs.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h4>
            <ul class="space-y-3">
              <li><a routerLink="/" class="text-gray-400 hover:text-accent transition-colors">Home</a></li>
              <li><a routerLink="/about" class="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
              <li><a routerLink="/services" class="text-gray-400 hover:text-accent transition-colors">Services</a></li>
              <li><a routerLink="/careers" class="text-gray-400 hover:text-accent transition-colors">Careers</a></li>
              <li><a routerLink="/contact" class="text-gray-400 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <!-- Services -->
          <div>
            <h4 class="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Our Services</h4>
            <ul class="space-y-3">
              <li class="text-gray-400">IT Staffing</li>
              <li class="text-gray-400">Software Development</li>
              <li class="text-gray-400">CRM Solutions</li>
              <li class="text-gray-400">Data Analysis</li>
              <li class="text-gray-400">Information Security</li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-lg font-semibold mb-6 border-b border-gray-700 pb-2 inline-block">Contact Us</h4>
            <ul class="space-y-4">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span class="text-gray-400">13800 Coppermine Road,<br>1st Floor - 2377,<br>Herndon, VA 20171</span>
              </li>
              <li class="flex items-center">
                <svg class="w-6 h-6 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@techpioneerit.com" class="text-gray-400 hover:text-accent transition-colors">info@techpioneerit.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} Tech Pioneer IT Solutions Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
