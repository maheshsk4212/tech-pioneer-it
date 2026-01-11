import { Component, inject } from '@angular/core';
import { ToastService } from '../../core/services/toast.service';
import { EmailJSService } from '../../core/services/emailjs.service';

@Component({
  selector: 'app-careers',
  standalone: false,
  templateUrl: './careers.component.html'
})
export class CareersComponent {
  private toastService = inject(ToastService);
  private emailJSService = inject(EmailJSService);
  isSubmitting = false;

  formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null as any // To store the file data
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit for Netlify Forms
        this.toastService.show('File size should not exceed 10MB', 'error', 3000);
        event.target.value = '';
        this.formData.resume = null;
        return;
      }
      this.formData.resume = file;
    }
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    // Basic validation check
    if (!form.checkValidity()) {
      this.toastService.show('Please fill in all required fields.', 'error', 3000);
      return;
    }

    this.isSubmitting = true;

    // Create FormData for Netlify
    const formData = new FormData();
    formData.append('form-name', 'careers');
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('phone', this.formData.phone || '');
    formData.append('message', this.formData.message);

    if (this.formData.resume) {
      formData.append('resume', this.formData.resume);
    }

    try {
      const result = await this.emailJSService.sendCareerApplicationNetlify(formData);

      if (result.success) {
        this.toastService.show(result.message, 'success', 5000);
        form.reset();
        this.formData = {
          name: '',
          email: '',
          phone: '',
          message: '',
          resume: null
        };
      } else {
        this.toastService.show(result.message, 'error', 5000);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      this.toastService.show('An unexpected error occurred. Please try again later.', 'error', 5000);
    } finally {
      this.isSubmitting = false;
    }
  }
}