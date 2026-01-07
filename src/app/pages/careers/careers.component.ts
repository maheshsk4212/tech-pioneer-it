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
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        this.toastService.show('File size should not exceed 5MB', 'error', 3000);
        event.target.value = '';
        this.formData.resume = null;
        return;
      }

      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.formData.resume = e.target.result; // Base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  async onSubmit(form: any) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;

    const result = await this.emailJSService.sendCareerEmail(this.formData);

    if (result.success) {
      this.toastService.show(result.message, 'success', 5000);
      form.resetForm();
    } else {
      this.toastService.show(result.message, 'error', 5000);
    }

    this.isSubmitting = false;
  }
}