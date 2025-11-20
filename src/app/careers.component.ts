import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-primary py-24 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">Join Our Team</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
          Build your career with a company that values innovation, growth, and work-life balance.
        </p>
      </div>
    </section>

    <!-- Culture -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl font-bold text-primary mb-4">Why Tech Pioneer IT?</h2>
          <p class="text-secondary text-lg">
            We believe that our people are our greatest asset. We foster a dynamic environment where you can grow your skills and work on challenging projects.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-accent">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Innovation</h3>
            <p class="text-secondary">Work with the latest technologies and frameworks. We encourage creative problem-solving.</p>
          </div>
          <div class="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-accent">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Learning</h3>
            <p class="text-secondary">Continuous learning opportunities and mentorship programs to help you advance your career.</p>
          </div>
          <div class="p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-accent">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Flexibility</h3>
            <p class="text-secondary">We value work-life balance and offer flexible working arrangements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact for Careers -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
          <div class="mb-8 md:mb-0">
            <h3 class="text-2xl font-bold text-primary mb-2">Don't see a matching role?</h3>
            <p class="text-secondary">We are always looking for talent. Send us your resume.</p>
          </div>
          <div class="text-center md:text-right">
             <p class="text-lg font-semibold text-primary mb-2">USA Headquarters</p>
             <p class="text-secondary mb-4">13800 Coppermine Road, 1st Floor – 2377,<br>Herndon, VA 20171</p>
             <a href="mailto:info@techpioneerit.com" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent hover:bg-accent-hover transition-colors">
               Email Your Resume
             </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CareersComponent { }