import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ToastService } from '../../core/services/toast.service';
import { EmailJSService } from '../../core/services/emailjs.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html'
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