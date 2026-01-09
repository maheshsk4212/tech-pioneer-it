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
      if (file.size > 2 * 1024 * 1024) { // 2MB limit for free tier reliability
        this.toastService.show('File size should not exceed 2MB for the free tier', 'error', 3000);
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

    // Basic validation check (since we are bypassing ngSubmit)
    if (!form.checkValidity()) {
      this.toastService.show('Please fill in all required fields.', 'error', 3000);
      return;
    }

    this.isSubmitting = true;

    // Use sendForm which handles attachments natively
    const result = await this.emailJSService.sendCareerEmail(form);

    if (result.success) {
      this.toastService.show(result.message, 'success', 5000);
      form.reset(); // Native form reset
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

    this.isSubmitting = false;
  }
}