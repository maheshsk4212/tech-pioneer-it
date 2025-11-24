import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-primary text-white overflow-hidden">
      <!-- Video Background -->
      <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
        <source src="/videos/hero-bg.mp4" type="video/mp4">
      </video>
      <!-- Dark Overlay -->
      <div class="absolute inset-0 bg-primary/30"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative py-32 lg:py-48">
        <div class="max-w-3xl animate-slide-up">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            World's Most Trusted Partner for <span class="text-accent">IT Solutions</span> & Staffing
          </h1>
          <p class="text-xl text-gray-300 mb-10 leading-relaxed">
            We bring transparency, automation, and dynamic environments to your business. 
            Tailored development practices meeting your specific business requirements.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a routerLink="/contact" class="inline-flex justify-center items-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-accent/25">
              Get Started
              <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a routerLink="/services" class="inline-flex justify-center items-center px-8 py-4 border border-gray-600 hover:border-white text-white font-semibold rounded-lg transition-all duration-200 backdrop-blur-sm hover:bg-white/5">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Teaser -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div class="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                 alt="Team collaboration" 
                 class="relative rounded-2xl shadow-xl w-full object-cover h-[400px]">
          </div>
          <div>
            <h2 class="text-accent font-semibold tracking-wide uppercase mb-3">About Us</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-primary mb-6">Innovative Solutions for Modern Business</h3>
            <p class="text-secondary text-lg mb-6 leading-relaxed">
              At Tech Pioneer IT Solutions, we guarantee on-time delivery of projects within budget with high-quality code. 
              Whether it's classical methodologies like RUP, MSF, CMMI, or modern approaches like Agile, we adapt to your needs.
            </p>
            <ul class="space-y-4 mb-8">
              <li class="flex items-center text-secondary">
                <svg class="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Well Defined Process
              </li>
              <li class="flex items-center text-secondary">
                <svg class="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Technical Expertise
              </li>
              <li class="flex items-center text-secondary">
                <svg class="w-6 h-6 text-accent mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Performance Driven Metrics
              </li>
            </ul>
            <a routerLink="/about" class="text-accent font-semibold hover:text-accent-hover inline-flex items-center transition-colors">
              Learn more about us
              <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Highlight -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Our Expertise</h2>
          <p class="text-secondary text-lg">
            We build on our development skills and grow dynamically in areas of Collaboration, CRM, Data Analysis, VoIP, and Information Security.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Service 1 -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Software Development</h3>
            <p class="text-secondary mb-4">
              Custom software solutions tailored to your business needs using the latest frameworks and technologies.
            </p>
            <a routerLink="/services" class="text-accent hover:text-accent-hover font-medium text-sm">Read more &rarr;</a>
          </div>

          <!-- Service 2 -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">IT Staffing</h3>
            <p class="text-secondary mb-4">
              Connecting you with highly skilled technical professionals, developers, and engineering talent.
            </p>
            <a routerLink="/services" class="text-accent hover:text-accent-hover font-medium text-sm">Read more &rarr;</a>
          </div>

          <!-- Service 3 -->
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div class="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Information Security</h3>
            <p class="text-secondary mb-4">
              Robust security solutions to protect your data and infrastructure from modern threats.
            </p>
            <a routerLink="/services" class="text-accent hover:text-accent-hover font-medium text-sm">Read more &rarr;</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-primary text-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
            <div class="text-gray-400">Skilled Developers</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
            <div class="text-gray-400">Project Delivery</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-accent mb-2">24/7</div>
            <div class="text-gray-400">Support</div>
          </div>
          <div>
            <div class="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
            <div class="text-gray-400">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p class="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how Tech Pioneer IT can help you achieve your technology goals with our expert solutions.
          </p>
          <a routerLink="/contact" class="inline-block bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HomeComponent { }