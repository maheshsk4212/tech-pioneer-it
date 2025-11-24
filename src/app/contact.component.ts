nimport { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastService } from './services/toast.service';
import { EmailJSService } from './services/emailjs.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-primary py-24 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
      <div class="container mx-auto px-4 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">Contact Us</h1>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
          Have a question or need a quote? We'd love to hear from you.
        </p>
      </div>
    </section>

    <section id="get-in-touch" class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info -->
          <div>
            <h2 class="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
            <p class="text-secondary text-lg mb-10">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div class="space-y-8">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div class="ml-6">
                  <h4 class="text-lg font-bold text-primary mb-1">Visit Us</h4>
                  <p class="text-secondary">
                    Tech Pioneer IT Solutions Inc.<br>
                    13800 Coppermine Road, 1st Floor - 2377,<br>
                    Herndon, VA 20171
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div class="ml-6">
                  <h4 class="text-lg font-bold text-primary mb-1">Email Us</h4>
                  <a href="mailto:info@techpioneerit.com" class="text-accent hover:underline">info@techpioneerit.com</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white rounded-2xl shadow-lg p-8">
            <form (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">First Name <span class="text-red-500">*</span></label>
                  <input type="text" [(ngModel)]="formData.firstName" name="firstName" required #firstName="ngModel"
                    [class.border-red-500]="firstName.invalid && (firstName.dirty || firstName.touched)"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="John">
                  <div *ngIf="firstName.invalid && (firstName.dirty || firstName.touched)" class="text-red-500 text-sm mt-1">
                    First name is required.
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium text-secondary mb-2">Last Name <span class="text-red-500">*</span></label>
                  <input type="text" [(ngModel)]="formData.lastName" name="lastName" required #lastName="ngModel"
                    [class.border-red-500]="lastName.invalid && (lastName.dirty || lastName.touched)"
                    class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="Doe">
                  <div *ngIf="lastName.invalid && (lastName.dirty || lastName.touched)" class="text-red-500 text-sm mt-1">
                    Last name is required.
                  </div>
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-secondary mb-2">Email Address <span class="text-red-500">*</span></label>
                <input type="email" [(ngModel)]="formData.email" name="email" required email #email="ngModel"
                  [class.border-red-500]="email.invalid && (email.dirty || email.touched)"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="john@example.com">
                <div *ngIf="email.invalid && (email.dirty || email.touched)" class="text-red-500 text-sm mt-1">
                  <span *ngIf="email.errors?.['required']">Email is required.</span>
                  <span *ngIf="email.errors?.['email']">Please enter a valid email.</span>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-secondary mb-2">Message <span class="text-red-500">*</span></label>
                <textarea rows="4" [(ngModel)]="formData.message" name="message" required #message="ngModel"
                  [class.border-red-500]="message.invalid && (message.dirty || message.touched)"
                  class="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all" placeholder="How can we help you?"></textarea>
                <div *ngIf="message.invalid && (message.dirty || message.touched)" class="text-red-500 text-sm mt-1">
                  Message is required.
                </div>
              </div>

              <button type="submit" [disabled]="isSubmitting"
                [class.opacity-50]="isSubmitting"
                [class.cursor-not-allowed]="isSubmitting"
                class="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 rounded-lg transition-colors shadow-lg hover:shadow-accent/25">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map -->
    <section class="w-full bg-gray-200">
      <iframe 
        [src]="mapUrl"
        class="w-full h-[450px] block"
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  `
})
export class ContactComponent {
  private sanitizer = inject(DomSanitizer);
  private toastService = inject(ToastService);
  private emailJSService = inject(EmailJSService);
  mapUrl: SafeResourceUrl;
  isSubmitting = false;

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  };

  constructor() {
    // Simplified URL without timestamp parameter
    const url = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.0!2d-77.4137546846475!3d38.9465509795637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b6474f25bae887%3A0x7c6b8c8c8c8c8c8c!2s13800%20Coppermine%20Rd%2C%20Herndon%2C%20VA%2020171%2C%20USA!5e0!3m2!1sen!2sus';
    this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  async onSubmit(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    const result = await this.emailJSService.sendContactEmail(this.formData);

    if (result.success) {
      this.toastService.show(result.message, 'success', 5000);
      form.resetForm();
    } else {
      this.toastService.show(result.message, 'error', 5000);
    }

    this.isSubmitting = false;
  }
}