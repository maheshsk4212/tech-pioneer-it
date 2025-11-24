import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-primary py-24 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">About Tech Pioneer IT</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
          Delivering excellence in software development and IT staffing through transparency, automation, and innovation.
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="order-2 lg:order-1">
            <h2 class="text-accent font-semibold tracking-wide uppercase mb-3">Who We Are</h2>
            <h3 class="text-3xl md:text-4xl font-bold text-primary mb-6">Empowering Business Through Technology</h3>
            <div class="prose prose-lg text-secondary">
              <p class="mb-6">
                Tech Pioneer IT Solutions is more than just a development firm; we are your strategic partner in digital transformation. 
                With a robust team of <strong>500+ skilled professionals</strong>, we combine deep domain knowledge with cutting-edge technology expertise to deliver high-quality solutions.
              </p>
              <p class="mb-6">
                Our culture of excellence has led to a <strong>100% project delivery rate</strong>. We pride ourselves on:
              </p>
              <ul class="space-y-3 list-none pl-0">
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Adaptability:</strong> Expert handling of both detailed and vague project scopes.</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Precision:</strong> Realistic estimation and strict budget adherence.</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Communication:</strong> Seamless collaboration with stakeholders and 3rd parties.</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="order-1 lg:order-2 relative">
            <div class="absolute -inset-4 bg-blue-50 rounded-2xl transform rotate-3"></div>
            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop" 
                 alt="Modern office environment" 
                 class="relative rounded-2xl shadow-xl w-full object-cover h-[500px]">
          </div>
        </div>
      </div>
    </section>

    <!-- Our Approach -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <h2 class="text-accent font-semibold tracking-wide uppercase mb-3">Our Process</h2>
          <h3 class="text-3xl md:text-4xl font-bold text-primary mb-4">From Concept to Launch</h3>
          <p class="text-secondary text-lg">
            We follow a structured, transparent journey to ensure your vision becomes reality.
          </p>
        </div>

        <div class="relative">
          <!-- Line connecting steps (Desktop) -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 text-center md:text-right order-2 md:order-1">
                <h4 class="text-xl font-bold text-primary mb-2">1. Inquiry & Discovery</h4>
                <p class="text-secondary">We listen. Whether you have a detailed spec or just a spark of an idea, we're here to discuss it. No idea is dismissed.</p>
              </div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">1</span>
              </div>
              <div class="md:w-5/12 order-3"></div>
            </div>

            <!-- Step 2 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 order-3 md:order-1"></div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">2</span>
              </div>
              <div class="md:w-5/12 text-center md:text-left order-2 md:order-3">
                <h4 class="text-xl font-bold text-primary mb-2">2. Proposal & Strategy</h4>
                <p class="text-secondary">We leverage our vast experience to provide realistic estimates and guideline prices. We ensure we are the right fit for your goals.</p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 text-center md:text-right order-2 md:order-1">
                <h4 class="text-xl font-bold text-primary mb-2">3. Specification & Blueprint</h4>
                <p class="text-secondary">We define the deliverables. Instead of long-winded documents, we often use wireframes to visualize key features early.</p>
              </div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">3</span>
              </div>
              <div class="md:w-5/12 order-3"></div>
            </div>

            <!-- Step 4 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 order-3 md:order-1"></div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">4</span>
              </div>
              <div class="md:w-5/12 text-center md:text-left order-2 md:order-3">
                <h4 class="text-xl font-bold text-primary mb-2">4. Design Phase</h4>
                <p class="text-secondary">We craft the look and feel. Using provisional designs as a style guide, we ensure consistency across the entire application.</p>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 text-center md:text-right order-2 md:order-1">
                <h4 class="text-xl font-bold text-primary mb-2">5. Development</h4>
                <p class="text-secondary">We build using modern frameworks to deliver robust, scalable projects on shorter deadlines without compromising quality.</p>
              </div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">5</span>
              </div>
              <div class="md:w-5/12 order-3"></div>
            </div>

             <!-- Step 6 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 order-3 md:order-1"></div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-accent rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <span class="text-white font-bold text-sm">6</span>
              </div>
              <div class="md:w-5/12 text-center md:text-left order-2 md:order-3">
                <h4 class="text-xl font-bold text-primary mb-2">6. Testing & Refinement</h4>
                <p class="text-secondary">You get early access. We iterate based on your feedback to ensure the final product meets your exact needs.</p>
              </div>
            </div>

             <!-- Step 7 -->
            <div class="relative flex flex-col md:flex-row items-center justify-between">
              <div class="md:w-5/12 text-center md:text-right order-2 md:order-1">
                <h4 class="text-xl font-bold text-primary mb-2">7. Go Live!</h4>
                <p class="text-secondary">The launch. We handle the deployment, and all that remains is for you to hit the button and start growing.</p>
              </div>
              <div class="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2 w-10 h-10 bg-green-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10 order-1 md:order-2 mb-4 md:mb-0">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="md:w-5/12 order-3"></div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 bg-primary text-white text-center">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Ready to start your journey?</h2>
        <a routerLink="/contact" fragment="get-in-touch" class="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Get in Touch
        </a>
      </div>
    </section>
  `
})
export class AboutComponent { }